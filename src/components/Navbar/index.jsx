import React, { useRef } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./top-nav.scss";
import "./side-nav.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import logo from "../../images/logo.png";
import hppcbLogo from "../../images/hppcb-logo.png";

const Navbar = ({ toggleClass }) => {
  const refnavcontainer = useRef(null);

  const toggleNavClass = () => {
    const element = refnavcontainer.current;
    const withHideNav = "sidebar__wrapper hide__nav";
    const withOutHideNav = "sidebar__wrapper";

    if (element.className === withHideNav) {
      element.className = withOutHideNav;
    } else if (element.className === withOutHideNav) {
      element.className = withHideNav;
    }
  };

  const navHideShow = () => {
    toggleClass();
    toggleNavClass();
  };

  const navHideOnSm = () => {
    if (window.innerWidth <= 992) {
      navHideShow();
    }
  };

  const reloadFunc = (n) => {
    setTimeout(() => {
      window.location.reload();
    }, n);
  };

  return (
    <>
      <div className="nav__wrapper">
        <div className="nav__inner__wrapper px-3">
          <div className="nav__left">
            <FontAwesomeIcon
              onClick={navHideShow}
              icon={faBars}
              className="hum__icon"
            />

            <NavLink to="/" onClick={() => reloadFunc(200)}>
              <img className="main__logo" src={logo} alt="" />
              <img className="main__logo" src={hppcbLogo} alt="" />
            </NavLink>
          </div>
          {/* <div
            className={
              rightNavDisplay ? "nav__right " : "nav__right nav__right__toggle"
            }
          ></div> */}
        </div>
      </div>
      <div ref={refnavcontainer} className="sidebar__wrapper">
        <div className="sidebar__inner__wrapper">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "active accordion-button px-3"
                      : "accordion-button px-3"
                  }
                  onClick={() => {
                    navHideOnSm();
                    reloadFunc(200);
                  }}
                >
                  Dashboard
                </NavLink>
              </h2>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <NavLink
                  to="/offlineAlerts"
                  className={({ isActive }) =>
                    isActive
                      ? "active accordion-button px-3"
                      : "accordion-button px-3"
                  }
                  onClick={navHideOnSm}
                >
                  Offline alerts
                </NavLink>
              </h2>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <NavLink
                  to="/delayAlerts"
                  className={({ isActive }) =>
                    isActive
                      ? "active accordion-button px-3"
                      : "accordion-button px-3"
                  }
                  onClick={navHideOnSm}
                >
                  Delay alerts
                </NavLink>
              </h2>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <NavLink
                  to="/exceededParameterAlerts"
                  className={({ isActive }) =>
                    isActive
                      ? "active accordion-button px-3"
                      : "accordion-button px-3"
                  }
                  onClick={navHideOnSm}
                >
                  Parameter exceeded alerts
                </NavLink>
              </h2>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <NavLink
                  to="/deceedParameterAlerts"
                  className={({ isActive }) =>
                    isActive
                      ? "active accordion-button px-3"
                      : "accordion-button px-3"
                  }
                  onClick={navHideOnSm}
                >
                  Parameter deceeded alerts
                </NavLink>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
