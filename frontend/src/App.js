import { useEffect, useState } from "react";
import "./App.css";
import ModelDetailsPage from "./pages/ModelDetailsPage/ModelDetailsPage";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import ExplorePage from "./pages/ExplorePage/ExplorePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/Error/Error";
import Error from "./pages/Error/Error";
import Tryout from "./pages/Tryout/Tryout";
import Header from "./components/Header/Header";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/models" element={<ExplorePage />} />
          <Route path="/model/:id" element={<ModelDetailsPage />} />
          <Route path="/model/:id/tryout" element={<Tryout />} />
          <Route path="*" element={<Error status={404} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
