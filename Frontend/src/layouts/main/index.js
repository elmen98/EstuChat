import { Container, Stack } from "@mui/material";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import Logo from "../../assets/Images/EstuChat_transparent.png";
import { useSelector } from "react-redux";


const MainLayout = () => {
  const {isLoggedIn} = useSelector((state)=> state.auth);


  if(isLoggedIn){
    return <Navigate  to="/app"/>
  }
  return (
    <>
      <Container sx={{ mt: 5 }} maxWidth="sm">
        <Stack spacing={5} p={4}>
          <Stack
            sx={{ width: "100%" }}
            direction={"column"}
            alignItems={"center"}
            
          >
            <img style={{ height: 220, width: 200 }} src={Logo} alt="logo" />
          </Stack>
        </Stack>
        

        <Outlet />
      </Container>
    </>
  );
};

export default MainLayout;
