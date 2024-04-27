// Imports
import React from "react";
import "./Timer.css";
// Pages Imports
// Component Imports
import TimerSegment from "../TimerSegment/TimerSegment";
// Element Imports
// Other Imports

export default function Timer(props) {
	function generateSegments() {
		const types = ["days", "hours", "minutes", "seconds"];

		return types.map((type, index) => (
			<TimerSegment className="number" type={type} key={index} />
		));
	}
	return (
		<>
			<div className="timer">{generateSegments()}</div>
		</>
	);
}
