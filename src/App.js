import React, { useRef } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import {
  Dashboard,
  IndustryDashBoard,
  OfflineAlerts,
  DelayAlerts,
  ExceededParameterAlerts,
  DeceedParameterAlerts,
  IndustrystatusReport,
  IndustrystatusReportCpcb,
  IndustrystatusReportSpcb,
  Nopage,
} from "./pages";
import Graph from "./components/Dashboard/ContentContainer/Graph";
import Map from "./components/Dashboard/ContentContainer/Map";

import IndustryGraph from "./components/IndustryDashboard/ContentContainer/IndustryGraph";
import IndustryMap from "./components/IndustryDashboard/ContentContainer/IndustryMap";
import IndustryCamera from "./components/IndustryDashboard/ContentContainer/industryCamera";

function App() {
  const refmaincontainer = useRef(null);
  const toggleClass = () => {
    let element = refmaincontainer.current;
    const withConatinerFull = "main__wrapper container__full";
    const withOutConatinerFull = "main__wrapper";

    if (element.className === withConatinerFull) {
      element.className = withOutConatinerFull;
    } else if (element.className === withOutConatinerFull) {
      element.className = withConatinerFull;
    }
  };

  return (
    <div className="site__warpper">
      <Navbar toggleClass={toggleClass} />
      <div ref={refmaincontainer} className="main__wrapper">
        <Routes>
          <Route element={<Dashboard />}>
            <Route index element={<Graph />} />
            <Route path="map" element={<Map />} />
          </Route>
          <Route element={<Dashboard />}>
            <Route path="/hppcb/home-dashboard" element={<Graph />} />
            <Route path="/hppcb/home-dashboard/map" element={<Map />} />
          </Route>
          <Route element={<IndustryDashBoard />}>
            <Route path="/:industry_name" element={<IndustryGraph />} />
            <Route path="/map/:industry_name" element={<IndustryMap />} />
            <Route path="/camera/:industry_name" element={<IndustryCamera />} />
          </Route>
          <Route path="offlineAlerts" element={<OfflineAlerts />} />
          <Route path="delayAlerts" element={<DelayAlerts />} />
          <Route
            path="exceededParameterAlerts"
            element={<ExceededParameterAlerts />}
          />
          <Route
            path="deceedParameterAlerts"
            element={<DeceedParameterAlerts />}
          />
          <Route
            path="industrystatus-report"
            element={<IndustrystatusReport />}
          />
          <Route
            path="industrystatus-report-cpcb"
            element={<IndustrystatusReportCpcb />}
          />
          <Route
            path="industrystatus-report-spcb"
            element={<IndustrystatusReportSpcb />}
          />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
