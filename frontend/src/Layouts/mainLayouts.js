import Header from "./Header/header";
import Sidebar from "./Sidebar/sidebar";
import Workarea from "./Workarea/workarea";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import getTitle from "../utils/getTitle";

function MainLayout() {
  const [title, setTitle] = useState();

  const superGetTitle = () => {
    setTitle(getTitle);
  };
  return (
    <>
      <Header />
      <Sidebar />
      {/* <Workarea /> */}
      <Outlet title={title} />
    </>
  );
}

export default MainLayout;
