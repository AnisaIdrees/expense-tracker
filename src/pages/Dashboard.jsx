import React from "react";
import { useAuth } from "../context/AuthContext";
import Card from "../components/Card";
import BarChart from "../components/BarChart";

function Dashboard() {
  const { currentUser } = useAuth();
  return (
    <>
      <div className="dashboard-container h-screen ">

        <div className="balance-box w-[100%]  mx-auto flex justify-center items-center gap-8 p-3 mt-4 flex-wrap">
          <Card text={"Current Balance"} number={0.0} />
          <Card text={"Total Balance"} number={0.0} />
          <Card text={"Expense"} number={0.0} />
        </div>

<div className="graph-container flex justify-center items-center gap-3 flex-wrap p-3">
 <BarChart/>
 <BarChart/>

</div>
 
      </div>
    </>
  );
}

export default Dashboard;
