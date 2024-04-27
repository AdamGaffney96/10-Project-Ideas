// Imports
import { React, useEffect, useState } from "react";
import "./Movies.css";
// Pages Imports
// Component Imports
import Movie from "../../components/Movie/Movie";
// Element Imports
// Other Imports

export default function Movies(props) {
	const [movies, setMovies] = useState([]);
	const [movieList, setMovieList] = useState([]);

	const newMovieList = loadMovies().then(movieList => createMovies(movieList));

	useEffect(() => {
		setMovieList(createMovies(movies));
	}, [movies]);

	async function loadMovies() {
		const MOVIE_DB_API = "bd0fb127088553eb97da4a6aca554e65";

		await fetch(
			`https://api.themoviedb.org/3/discover/movie?api_key=bd0fb127088553eb97da4a6aca554e65&language=en-GB&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
		)
			.then(response => response.json())
			.then(data => setMovies(data.results));
		// const baseLink = "https://image.tmdb.org/t/p/original/";
		// movies.forEach(movie => {
		// 	let container = document.createElement("div");
		// 	let poster = document.createElement("img");
		// 	let title = document.createElement("p");
		// 	container.classList.add("movie-container");
		// 	poster.classList.add("poster");
		// 	title.classList.add("title");
		// 	poster.src = `${baseLink}${movie.poster_path}`;
		// 	title.innerHTML = movie.title;
		// 	container.appendChild(poster);
		// 	container.appendChild(title);
		// 	movieList.appendChild(container);
		// });
	}

	function createMovie(movie) {
		const baseLink = "https://image.tmdb.org/t/p/original/";
		return (
			<Movie
				poster={`${baseLink}${movie.poster_path}`}
				title={movie.title}
				key={movies.indexOf(movie)}
			></Movie>
		);
	}

	function createMovies(movies) {
		if (!movies || movies.length === 0) return;
		const newMovieList = [];
		movies.forEach(movie => newMovieList.push(createMovie(movie)));

		return newMovieList;
	}

	return <div className="movie-grid">{movieList}</div>;
}
