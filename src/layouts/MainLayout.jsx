import * as React from "react";
import { Container } from "@mui/material";

import Appbar from "../components/Appbar";

export default function MainLayout({ children }) {
  return (
    <>
      <Appbar />
      <Container maxWidth="false" disableGutters sx={{ overflow: "hidden" }}>
        {children}
      </Container>
    </>
  );
}
