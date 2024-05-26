import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

import Homepage from "../../pages/Homepage/Homepage";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage";
import MovieCast from "../MovieCast/MovieCast";

import Navigation from "../Navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />

      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/movies" element={<MoviesPage />} />
      <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
        <Route path="cast" element={<MovieCast />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
