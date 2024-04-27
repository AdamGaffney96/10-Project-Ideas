// Imports
import React from "react";
import "./Countdown.css";
import Timer from "../../components/Timer/Timer";
// Pages Imports
// Component Imports
// Element Imports
// Other Imports

export default function Countdown(props) {
	return (
		<>
			<div className="content">
				<h1>Countdown Clock</h1>
				<div className="timer-content">
					{/* <TimerSelector/> */}
					<select className="timer-selector">
						<option value="newyearsday">New Years Day</option>
						<option value="christmas">Christmas Day</option>
						<option value="summer">First Day of Summer</option>
					</select>
					<Timer />
				</div>
			</div>
		</>
	);
}
