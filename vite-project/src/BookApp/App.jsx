
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './Login'
import BookGallery from './BookGallery'
import Home from './Home'


export default function App() {
    const [movies, setMovies] = useState([]);  // Adjusted to hold an array of movies

    return (
        <Router>
            <div className="app">
                <h1>Movie Search App</h1>
                <Login />  {/* Set movies based on the search */}

                <Routes>
                    <Route path="/home" element={<Home/>} />
                    <Route path="/books/:id" element={<BookGallery />} />
                </Routes>
            </div>
        </Router>
    );
}