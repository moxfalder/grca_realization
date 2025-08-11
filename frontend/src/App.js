import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/mainLayouts";
import Registration from "./Components/Registraion/registration";
import GeneralInfo from "./Components/GeneralInfo/generalInfo";

function App() {
  return (
    <BrowserRouter>
      <div className="grcaApp">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route
              index
              element={<GeneralInfo title="Информация о пользователе" />}
            />
            <Route path="/registration" element={<Registration />} />
            <Route path="*" element={<GeneralInfo />} />
          </Route>
        </Routes>
        {/* <Header />
      <Sidebar title="доступные модули" />
      <Workarea /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
