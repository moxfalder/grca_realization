import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import Header from "./Components/Header/header";
import Workarea from "./Components/Workarea/workarea";
import Sidebar from "./Components/Workarea/Sidebar/sidebar";

function App() {
  return (
    <div className="grcaApp">
      <Header />
      <Sidebar title="доступные модули" />
      <Workarea />
    </div>
  );
}

export default App;
