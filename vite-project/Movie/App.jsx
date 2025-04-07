import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import MovieList from './MovieList';
import Search from './Search';
import MovieDetail from "./MovieDetail";

export default function App() {
    const [movies, setMovies] = useState([]);  // Adjusted to hold an array of movies

    return (
        <Router>
            <div className="app">
                <h1>Movie Search App</h1>
                <Search onSearch={setMovies} />  {/* Set movies based on the search */}

                <Routes>
                    <Route path="/" element={<MovieList movies={movies} />} />
                    <Route path="/movie/:id" element={<MovieDetail />} />
                </Routes>
            </div>
        </Router>
    );
}