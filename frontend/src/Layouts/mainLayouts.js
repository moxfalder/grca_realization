import Header from "./Header/header";
import Sidebar from "./Sidebar/sidebar";
import Workarea from "./Workarea/workarea";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Header />
      <Sidebar />
      <Workarea />
      <Outlet />
    </>
  );
}

export default MainLayout;
