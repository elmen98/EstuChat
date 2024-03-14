import React, { Suspense, lazy } from "react";
import Chats from "./Chats";
import { Box, Stack } from "@mui/material";
import Conversation from "../../components/Conversation";
import { useTheme } from "@mui/material/styles";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";
import SharedMessages from "../../components/SharedMessages";
import Favoritos from "../../components/Favorites.js";

const GeneralApp = () => {
  const theme = useTheme();
  const { sidebar } = useSelector((store) => store.app);

  return (
    <>
      <Stack direction="row" sx={{ width: "100%" }}>
        <Chats />
        <Box
          sx={{
            height: "100%",
            width: sidebar.open ? "calc(100vw - 740px)" : "calc(100vw - 420px)",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F0F4F4"
                : theme.palette.background.default,
          }}
        >
          {/*index*/}
          <Conversation />
        </Box>
        {/*contact*/}
        {sidebar.open &&
          (() => {
            switch (sidebar.type) {
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
