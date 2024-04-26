// Imports
import React from "react";
import "./Header.css";
import { Outlet, Link } from "react-router-dom";
// Pages Imports
// Component Imports
// Element Imports
// Other Imports

export default function Header() {
	return (
		<>
			<nav>
				<ul role="list" className="nav">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="games">Games</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</>
	);
}
