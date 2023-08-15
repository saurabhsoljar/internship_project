import { EuiProvider } from "@elastic/eui";
import "@elastic/eui/dist/eui_theme_dark.css";
import React from "react";
import { Routes,Route} from "react-router-dom"
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function App () {
  return (
    <EuiProvider>
    <Routes>
    <Route path="/login" element={<Login />}/>
    <Route path="/" element={<Dashboard/>}/>
    <Route path="*" element={<Dashboard/>}/>
    </Routes>
    </EuiProvider>
  );
}

export default App