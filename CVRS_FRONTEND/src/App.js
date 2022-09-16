import "./App.css";
import Routing from "./components/Route/Routing";
import {createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography:{
    fontFamily:"Lato"
  }
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Routing />
      </div>
    </ThemeProvider>
  );
}

export default App;
