import { useState } from "react";
import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from "react-router-dom";

import Header from "../src/components/Header/Header";
import Home from "../src/pages/Home/Home";
import Countdown from "./pages/Countdown/Countdown";
import Movies from "./pages/Movies/Movies";

import "./App.css";
import "./reset.css";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Header />}>
			<Route index element={<Home />} />
			<Route path="/countdown" element={<Countdown />} />
			<Route path="/movies" element={<Movies />} />
		</Route>
	)
);

export default function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}
