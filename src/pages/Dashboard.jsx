import React from "react";


import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainComponent";

const Dashboard = () => {
  return (
    <div className="d-flex h-100">
      <div className="col-2">
        <Sidebar />
      </div>

      <div className="col-10">
        <MainContent />
      </div>

    </div>
  );
};

export default Dashboard;
