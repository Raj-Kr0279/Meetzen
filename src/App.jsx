import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import { authRoutes } from "./routes/authRoutes";
import { appRoutes } from "./routes/appRoutes";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          {authRoutes}
          {appRoutes}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
