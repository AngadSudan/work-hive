import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import CompanyLogin from "./pages/CompanyLogin.jsx";
import CompanySignup from "./pages/CompanySignup.jsx";
import Home from "./pages/Home.jsx";
import IndividualProjecs from "./pages/IndividualProjects.jsx";
import Landing from "./pages/Landing.jsx";
import Login from "./pages/Login.jsx";
import Organization from "./pages/Organization.jsx";
import Project from "./pages/Project.jsx";
import Task from "./pages/Task.jsx";
import Test from "./pages/Test.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index path="/home" element={<Home />} />
      <Route index path="/organization" element={<Organization />} />
      <Route index path="/projects" element={<Project />} />
      <Route index path="/project/:project" element={<IndividualProjecs />} />
      <Route index path="/task" element={<Task />} />
      <Route index path="" element={<Landing />} />
      <Route index path="/login" element={<Login />} />
      <Route index path="/company-login" element={<CompanyLogin />} />
      <Route index path="/company-signup" element={<CompanySignup />} />
      <Route index path="/profile" element={<Test />} />
    </>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
