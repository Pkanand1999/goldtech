import React from "react";
import { Route, Routes } from "react-router-dom";
import ViewDetail from "../pages/ViewDetail";
import Dashboard from "../pages/Dashboard";


const Router = () => {
  return (
    <Routes>
      <Route path="userdetails/:id" element={<ViewDetail />} />
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};

export default Router;
