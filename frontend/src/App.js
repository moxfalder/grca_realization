import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./Components/Header/header";
// import Workarea from "./Components/Workarea/workarea";
// import Sidebar from "./Components/Workarea/Sidebar/sidebar";
import MainLayout from "./Layouts/mainLayouts";
import Registration from "./Components/Registraion/registration";
import GeneralInfo from "./Layouts/Workarea/GeneralInfo/generalInfo";

function App() {
  return (
    <BrowserRouter>
      <div className="grcaApp">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<GeneralInfo />} />
            <Route path="/registration" element={<Registration />} />
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
