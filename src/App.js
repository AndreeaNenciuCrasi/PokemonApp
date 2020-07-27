import React from "react";

import Routes from "./Routes";
import Navbar from "./Navbar";
import { ThemeProvider } from "./contexts/ThemeContext";
import PageContent from "./PageContent";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <PageContent>
        <Navbar />
        <Routes />
      </PageContent>
    </ThemeProvider>
  );
}

export default App;
