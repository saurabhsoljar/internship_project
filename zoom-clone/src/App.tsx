import { EuiProvider } from "@elastic/eui";
import "@elastic/eui/dist/eui_theme_dark.css";
import React from "react";

const App = () => {
  return (
    <EuiProvider>
    <div>App</div>
    </EuiProvider>
  );
}

export default App