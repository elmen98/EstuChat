import React from "react";
import { Box, Stack } from "@mui/material";

import { useTheme } from "@mui/material/styles";

import Header from "./Header";
import Footer from "./Footer";
import Message from "./Message";

const Conversation = () => {

  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      {/*Header*/}

      <Header />
      {/*MSG */}
      
      <Box width={"100%"} sx={{ flexGrow: 1, height: "100%", overflowY: "scroll" }}>
      <Message/>
      </Box>
      {/*cHATFOLDER*/}
      <Footer />
    </Stack>
  );
};

export default Conversation;
