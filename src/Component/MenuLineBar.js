import React from "react";
import "./MenuLineBar.css";
import TabsDisplay from "./TabsDisplay";
import SideBar from "./SideBar";
import Cards from "./Cards";
import Chart from "./Chart";
import VerticalLinearStepper from "./VerticalLinearStepper";

const MenuLineBar = () => {
  return (
    <div className="menuLineBar">
      <div className="sideBar">
        <SideBar />
      </div>
      <div className="menuclickitems">
        <TabsDisplay />
      </div>

      <div className="project-comp-dis">
        <Cards />
      </div>
      <div className="Calender-display">
        {/* <div className="chart_content"> */}
        <Chart />
        {/* </div> */}
      </div>
      <div className="stepper-display">
        <VerticalLinearStepper />
      </div>
    </div>
  );
};

export default MenuLineBar;
