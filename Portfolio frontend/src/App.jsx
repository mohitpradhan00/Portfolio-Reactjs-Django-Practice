import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from "react";
import Home from "./components/Pages/Porfolio";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Pages/Login";
import Register from "./components/pages/Register";
import NotFound from "./components/Pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import Portfolio from "./components/Pages/Porfolio";
import UpdateForm from "./components/Pages/UpdateForm";
import HeroSectionUpdate from "./components/updateFormComponent/HeroSectionUpdate";

function App() {
  function Logout() {
    localStorage.clear();
    return <Navigate to="/login" />;
  }

  function RegisterAndLogout() {
    localStorage.clear();
    return <Register />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Portfolio />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="*" element={<NotFound />}></Route>
        <Route
          path="/updateform"
          element={
            <ProtectedRoute>
              <HeroSectionUpdate />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
