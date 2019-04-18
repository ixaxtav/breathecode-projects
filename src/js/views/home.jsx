import React from "react";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Duration } from "../component/duration_box.jsx";

export class Home extends React.Component {
	render() {
		return (
			<div className="text-center mt-5">
				<Duration />
			</div>
		);
	}
}
