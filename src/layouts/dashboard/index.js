import { Stack } from "@mui/material";

import React from "react";
import { Outlet } from "react-router-dom";

import SideBar from "../../pages/dashboard/SideBar";

const DashboardLayout = () => {
  return (
    <>
      <Stack direction={"row"} sx={{ height: "100%" }}>
        <SideBar />
        <Outlet />
      </Stack>
    </>
  );
};

export default DashboardLayout;
