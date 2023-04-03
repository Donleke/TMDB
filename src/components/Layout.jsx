import React from "react";
import { Navbar, SideBar } from "./";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar />

      <div className="d-lg-flex ">
        <div
          className="d-none d-lg-block"
          style={{
            width: "200px",
            minHeight: "100vh",
            backgroundColor: "#1a1b1d",
          }}
        >
          <div className="position=fixed sideAdjust scrollbody top-0 start-0">
            <SideBar />
          </div>
        </div>

        <div className="outlet ">
          <Outlet />
        </div>
      </div>
    </>
  );
}
