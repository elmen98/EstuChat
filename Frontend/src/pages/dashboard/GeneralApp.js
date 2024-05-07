import React, { Suspense, lazy } from "react";
import Chats from "./Chats";
import { Box, Stack, Typography } from "@mui/material";
import Conversation from "../../components/Conversation";
import { useTheme } from "@mui/material/styles";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";
import SharedMessages from "../../components/SharedMessages";
import Favoritos from "../../components/Favorites.js";
import NoChat from "../../assets/Illustration/NoChat.js";
import { Link } from "react-router-dom";

const GeneralApp = () => {
  const theme = useTheme();
  const { sideBar, room_id, chat_type } = useSelector((store) => store.app);

  return (
    <>
      <Stack direction="row" sx={{ width: "100%" }}>
        <Chats />
        <Box
          sx={{
            height: "100%",
            width: sideBar.open ? "calc(100vw - 740px)" : "calc(100vw - 420px)",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F0F4F4"
                : theme.palette.background.default,
          }}
        >
          {/*index*/}
          {chat_type === "individual" &&
          room_id !== null ? (
            <Conversation />
          ) : (
            <Stack
              spacing={2}
              sx={{ height: "100%", width: "100%" }}
              alignItems="center"
              justifyContent={"center"}
            >
              <NoChat />
              <Typography variant="subtitle2">
                Selecciona una conversacion empieza una {" "}
                <Link
                  style={{
                    color: theme.palette.primary.main,
                    textDecoration: "none",
                  }}
                  to="/"
                >
                  nueva conversacion
                </Link>
              </Typography>
            </Stack>
          )}
          {/* <Conversation /> */}
        </Box>
        {/*contact*/}
        {sideBar.open &&
          (() => {
            switch (sideBar.type) {
              case "CONTACT":
                return <Contact />;
             
              case "SHARED":
                return <SharedMessages/>;
              
              case "STARRED":
                  return<Favoritos/>

              default:
                break;
            }
          })()}
      </Stack>
    </>
  );
};

export default GeneralApp;
