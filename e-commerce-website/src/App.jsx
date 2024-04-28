import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { AllRoutes } from "./Routes/AllRoutes";
import { Navbar } from "./Routes/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <AllRoutes />
    </>
  );
}

export default App;
