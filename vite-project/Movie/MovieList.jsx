import React from "react";
import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
    return (
        <div className="movie-list">
            {movies.length > 0 ? (
                movies.map((movie) => (
                    <Link
                        to={`/movie/${movie.imdbID}`} // Corrected to imdbID
                        key={movie.imdbID} // Corrected to imdbID
                        className="movie-card"
                        aria-label={`Подробное описание фильма ${movie.Title} (${movie.Year})`} // More descriptive aria-label
                    >
                        <div className="movie-poster">
                            <img
                                src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Poster'}
                                alt={`Постер фильма ${movie.Title} (${movie.Year})`} // More detailed alt text
                                loading="lazy"
                            />
                        </div>
                        <div className="movie-info">
                            <h3 className="movie-title">{movie.Title}</h3>
                            <p className="movie-meta">
                                <span>{movie.Year}</span>
                                <span>.</span>
                                <span>{movie.Type === 'movie' ? 'Фильм' : 'Сериал'}</span>
                            </p>
                        </div>
                    </Link>
                ))
            ) : (
                <p>Нет фильмов для отображения.</p>
            )}
        </div>
    );
};

export default MovieList;