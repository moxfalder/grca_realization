import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import Header from "./Components/Header/header";
import Sidebar from "./Components/Sidebar/sidebar";

function App() {
  return (
    <div className="grcaApp">
      <Header />
      <Sidebar />
    </div>
  );
}

export default App;
