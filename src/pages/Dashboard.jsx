import { useEffect } from "react";
import { getCourses } from "../services/apiCourses";

function Dashboard() {
  useEffect(function () {
    getCourses().then((data) => console.log(data));
  }, []);

  return <div>DASHBOARD</div>;
}

export default Dashboard;
