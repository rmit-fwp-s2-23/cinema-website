// import React from 'react'
import NavigationBar from '../../components/nav/Nav';

// const Home = () => {
//     return (
//         <div>
//             < Navbar />
//             <div> 
//                 Home
//             </div>
//         </div>

//     );
// };

// export default Home;
import React, { useState, useEffect } from 'react';
// import './App.css';
// import MovieList from './components/MovieList';

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Simulate fetching movie data from an API
    // Replace this with your actual API call
    const fetchData = async () => {
      try {
        const response = await fetch('YOUR_API_ENDPOINT');
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div> 
        <NavigationBar/>

    <div className="App">
      <header className="App-header">
        <h1>Movie Home Page</h1>
      </header>
      <main>
        <MovieList movies={movies} />
      </main>
    </div>
    </div>
  );
};

export default App;
