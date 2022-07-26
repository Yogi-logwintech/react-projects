import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material'
import { Container } from "@mui/system";
import Add from "./components/Add";
import { useState } from "react";

function App() {

  const [mode, setMode] = useState('light')

  const darkTheme = createTheme ({
    palette: {
      mode: mode
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor="background.default" color="text.primary">
        <Navbar />
        <Container maxWidth='xl' sx={{maxWidth: "1500px", width: "100%"}}>
          <Stack direction='row' spacing={2} justifyContent='space-between'>
            <Sidebar setMode={setMode} mode={mode} />
            <Feed />
            <Rightbar />
          </Stack>
          <Add />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
