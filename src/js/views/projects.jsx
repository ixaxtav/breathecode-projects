import React from "react";
import { Navbar } from "../component/navbar.jsx";

export class Projects extends React.Component {
	render() {
		return (
			<div>
				<div>
					<Navbar navbarBrand="Pool of projects" />
				</div>
				<hr className="mt-0" />
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

					<hr />
					<div className="row no-gutters">
						<div className="col-sm-4">
							<img src="https://via.placeholder.com/250" />
						</div>
						<div className="col-sm-8">
							<div className="row">
								<div className="col">
									<h1>
										{" "}
										Build a postcard usign HTML and CSS{" "}
									</h1>
								</div>
							</div>
							<div className="row">
								<div className="col">
									<span>
										{" "}
										In the following technologies:{" "}
										<a href="#">Python,</a>{" "}
										<a href="#">Flask,</a>{" "}
										<a href="#">{"Rest API's"}</a>
									</span>
								</div>
							</div>
							<div className="row buttonProject">
								<div className="col">
									<button>
										<i
											className="fas fa-video"
											style={{ color: "#722f37" }}
										/>{" "}
										With Video
									</button>
									<button>
										<i className="fas fa-puzzle-piece" />{" "}
										Beginner
									</button>
									<button>
										<i className="far fa-clock" /> 8 hours
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
