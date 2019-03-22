import React from "react";
import { Navbar } from "../component/navbar.jsx";

export class Projects extends React.Component {
	render() {
		return (
			<div>
				<div>
					<Navbar navbarBrand="Pool of projects" />
				</div>
				<div className="container-fluid">
					<div className="row buttonFilter mx-auto w-100">
						<div className="col-sm-auto">
							<button>Technologies</button>
						</div>
						<div className="col-sm-auto">
							<button>Difficulty</button>
						</div>
						<div className="col-sm-auto">
							<button>Skills</button>
						</div>
						<div className="col-sm-auto">
							<button>Duration</button>
						</div>
						<div className="col-sm-auto">
							<button>With Video</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
