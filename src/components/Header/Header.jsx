// Imports
import React from "react";
import "./Header.css";
import { Outlet, Link, useResolvedPath } from "react-router-dom";
// Pages Imports
// Component Imports
// Element Imports
// Other Imports

export default function Header() {
	function getPathName() {
		const pathName = useResolvedPath().pathname.replace("/", "");

		return pathName === "" ? "home" : pathName;
	}
	return (
		<>
			<nav>
				<ul role="list" className="nav">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="countdown">Countdown</Link>
					</li>
					<li>
						<Link to="movies">Movies</Link>
					</li>
				</ul>
			</nav>
			<main className={getPathName()}>
				<Outlet />
			</main>
		</>
	);
}
