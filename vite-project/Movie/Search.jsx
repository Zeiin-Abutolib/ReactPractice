// import React, { useState } from "react";
// import axios from "axios";

// const Search = ({ onSearch }) => {
//     const [query, setQuery] = useState('');
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState('');

//     const SearchMovies = async (e) => {
//         e.preventDefault();
//         if (!query.trim()) return;

//         setIsLoading(true);
//         setError('');  
//         try {
//             const response = await axios.get(
//                 `https://www.omdbapi.com/?apikey=17dec6d0&s=${query}`
//             );
//             if (response.data.Response === 'False') {
//                 onSearch([]);
//                 setError('Фильмы не найдены.');
//             } else {
//                 onSearch(response.data.Search);
//             }
//         } catch (error) {
//             console.error('Іздеу:', error);
//             setError('Ошибка поиска. Попробуйте снова.');
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <form className="search-form" onSubmit={SearchMovies}>
//             <input
//                 type="text"
//                 className="search-input"
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 placeholder="Фильмнің атын енгізіңіз..."
//                 disabled={isLoading}
//                 aria-label="Фильм іздеу өрісі"
//             />
//             <button
//                 type="submit"  
//                 className="search-button"
//                 disabled={isLoading}
//                 title="Нажмите для поиска"  
//             >
//                 {isLoading ? 'Іздеу...' : 'Табу'}
//             </button>

//             {error && <p className="error-message">{error}</p>}  
//         </form>
//     );
// };

// export default Search;