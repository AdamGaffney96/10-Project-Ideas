// Imports
import React from "react";
import "./TimerDigit.css";
// Pages Imports
// Component Imports
// Element Imports
// Other Imports

export default function TimerDigit(props) {
	return (
		<>
			<p className="digit">{props.children}</p>
		</>
	);
}
