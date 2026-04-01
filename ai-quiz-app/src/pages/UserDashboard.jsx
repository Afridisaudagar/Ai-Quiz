import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
// import DashboardCard from "../components/DashboardCard";

const UserDashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ marginLeft: "200px", width: "100%" }}>
        <Navbar />

        <div style={{ display: "flex", padding: "20px" }}>
          <DashboardCard title="Quizzes Attempted" value="10" />
          <DashboardCard title="Score" value="85%" />
          <DashboardCard title="Rank" value="#12" />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;