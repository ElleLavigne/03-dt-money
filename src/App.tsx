
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { Transaction } from "./pages/Transaction";
import { TransactionsProvider } from "./contexts/TransactionsContentx";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionsProvider>
        <Transaction />
      </TransactionsProvider>
    </ThemeProvider>
  )
}

