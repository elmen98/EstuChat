import { Stack } from "@mui/material";

import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

import SideBar from "../../pages/dashboard/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { socket, connectSocket } from "../../socket";

const DashboardLayout = () => {
  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector((state) => state.auth);

  const user_id = window.localStorage.getItem("user_id");

  useEffect(() => {
    if (isLoggedIn) {
      window.onload = function () {
        if (!window.location.hash) {
          window.location = window.location + "#loaded";
          window.location.reload();
        }
      };

      window.onload();

      if (!socket) {
        connectSocket(user_id);
      }

      socket.on("new_friend_request", (data) => {
        dispatch();
        // showSnackbar({
        //   severity: "success",
        //   message: "New friend request received",
        // })
      });

      socket.on("request_accepted", (data) => {
        dispatch();
        // showSnackbar({
        //   severity: "success",
        //   message: "Friend Request Accepted",
        // })
      });
      socket.on("request_sent", (data) => {
        dispatch();
        // showSnackbar({ severity: "success", message: data.message })
      });
    }
    // Remove event listener on component unmount
    return () => {
      socket?.off("new_friend_request");
      socket?.off("request_accepted");
      socket?.off("request_sent");
      // socket?.off("start_chat");
      // socket?.off("new_message");
      // socket?.off("audio_call_notification");
    };
  }, [isLoggedIn, socket]);

  if (!isLoggedIn) {
    return <Navigate to="/auth/login" />;
  }
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
