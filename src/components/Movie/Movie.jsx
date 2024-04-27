// Imports
import React from "react";
import "./Movie.css";
// Pages Imports
// Component Imports
// Element Imports
// Other Imports

export default function Movie(props) {
	return (
		<>
			<div className="movie-wrapper">
				<div className="movie-poster">
					<img src={props.poster} alt={props.title} />
				</div>
				<div className="movie-details">
					<div className="movie-title">{props.title}</div>
					{/* <div className="movie-tagline">The first Captain America movie</div> */}
				</div>
			</div>
		</>
	);
}
