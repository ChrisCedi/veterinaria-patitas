import { ThemeProvider } from "@mui/material";
import { Navigation } from "./presentation/navigation/Navigation";
import { theme } from "./config/theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
}

export default App;
