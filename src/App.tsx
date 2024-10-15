
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { Transaction } from "./pages/Transaction";

export function App() {
  return (
   <ThemeProvider theme={defaultTheme}>
    <GlobalStyle/>
    <Transaction/>
   </ThemeProvider>
  )
}

