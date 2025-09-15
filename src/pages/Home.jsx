import { useState } from "react";
import MovieCard from "../components/MovieCard";

function Home() {
  const [searchQuery, setSearchQurey] = useState("");

  const movies = [
    { id: 1, title: "Interstellar", releaseDate: 2010 },
    { id: 2, title: "Hre", releaseDate: 2013 },
    { id: 3, title: "Fight Club", releaseDate: 1999 },
    { id: 4, title: "Dark night", releaseDate: 2008 },
  ];

  const handelSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
  };

  return (
    <>
      <div className="home">
        <form action="" onSubmit={handelSearch} className="search-form">
          <input
            type="text"
            placeholder="Search ..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQurey(e.target.value);
            }}
            name=""
            id=""
            className="search-input"
          />
          <button type="submit">Search</button>
        </form>

        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
