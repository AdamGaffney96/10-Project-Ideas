// Imports
import React from "react";
import "./TimerCaption.css";
// Pages Imports
// Component Imports
// Element Imports
// Other Imports

export default function TimerCaption(props) {
	return (
		<>
			<div className={props.className}>{props.children}</div>
		</>
	);
}
