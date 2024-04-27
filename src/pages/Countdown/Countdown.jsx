// Imports
import React from "react";
import "./Countdown.css";
// Pages Imports
// Component Imports
// Element Imports
// Other Imports

export default function Countdown(props) {
	return (
		<>
			<div className="content">
				<div className="timer-content">
					<select className="timer-selector">
						<option value="newyearsday">New Years Day</option>
						<option value="christmas">Christmas Day</option>
						<option value="summer">First Day of Summer</option>
					</select>
					<div className="timer">
						<div className="number days">000</div>
						<div className="number hours">00</div>
						<div className="number minutes">00</div>
						<div className="number seconds">00</div>
						<div className="caption days-caption">days</div>
						<div className="caption hours-caption">hours</div>
						<div className="caption minutes-caption">minutes</div>
						<div className="caption seconds-caption">seconds</div>
					</div>
				</div>
			</div>
		</>
	);
}
