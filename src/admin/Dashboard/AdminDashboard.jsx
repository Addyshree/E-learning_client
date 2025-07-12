import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../utils/Layout";
import axios from "axios";
import { server } from "../../main";
import "./dashboard.css";

const AdminDashbord = ({ user }) => {
  const navigate = useNavigate();

  if (user && user.role !== "admin") return navigate("/");

  const [stats, setStats] = useState({});

  async function fetchStats() {
    try {
      const { data } = await axios.get(`${server}/api/stats`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });

      setStats(data.stats);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchStats();
  }, []);
  return (
    <div>
      <Layout>
        <div className="main-content">
          <div className="box">
            <p>Total Courses</p>
            {/* <p>{stats.totalCourses}</p> */}
            <p>{stats?.totalCourses ?? "Loading..."}</p>
          </div>
          <div className="box">
            <p>Total Lectures</p>
            {/* <p>{stats.totalLectures}</p> */}
            <p>{stats?.totalLectures ?? "Loading..."}</p>
          </div>
          <div className="box">
            <p>Total Users</p>
            {/* <p>{stats.totalUsers}</p> */}
            <p>{stats?.totalUsers ?? "Loading..."}</p>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default AdminDashbord;
