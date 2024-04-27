// Imports
import React from "react";
import "./TimerSegment.css";
// Pages Imports
// Component Imports
import TimerCaption from "../TimerCaption/TimerCaption";
import TimerDigit from "../TimerDigit/TimerDigit";
// Element Imports
// Other Imports

export default function TimerSegment(props) {
	function defaultSegments(type) {
		const segment = [
			<TimerDigit key="0">0</TimerDigit>,
			<TimerDigit key="1">0</TimerDigit>,
			<TimerDigit key="2">0</TimerDigit>,
		];

		if (type !== "days") segment.pop();

		return segment;
	}
	return (
		<>
			<div className={props.className}>{defaultSegments(props.type)}</div>
			<TimerCaption className={`caption`}>{props.type}</TimerCaption>
		</>
	);
}
