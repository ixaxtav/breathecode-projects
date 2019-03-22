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
				<div className="container">
					<div className="row buttonFilter d-none d-sm-block">
						<button>Technologies</button>

						<button>Difficulty</button>

						<button>Skills</button>

						<button>Duration</button>

						<button>With Video</button>
					</div>
					<div className="row buttonFilterMOB text-center d-block d-sm-none">
						<div className="col">
							<button>Technologies</button>

							<button>Difficulty</button>

							<button>Skills</button>

							<button>Duration</button>

							<button>With Video</button>
						</div>
					</div>

					<hr className="lineSeparator" />
					<div className="row" style={{ marginTop: "50px" }}>
						<div className="col-sm-4  text-center pl-0">
							<img
								className="border border-dark"
								src="https://via.placeholder.com/250"
							/>
						</div>
						<div className="col-sm-8 my-auto">
							<div className="row">
								<div className="col-sm pt-2 ">
									<h1>
										{" "}
										Build a postcard usign HTML and CSS{" "}
									</h1>
								</div>
							</div>
							<div className="row pt-2 pl-1">
								<div className="col-sm">
									<span>
										{" "}
										In the following technologies:{" "}
										<a href="#">Python,</a>{" "}
										<a href="#">Flask,</a>{" "}
										<a href="#">{"Rest API's"}</a>
									</span>
								</div>
							</div>
							<div className="row pt-2 ">
								<div className="col-auto mr-auto">
									<button className="pl-1 buttonProject">
										<i
											className="fas fa-video"
											style={{ color: "#722f37" }}
										/>{" "}
										With Video
									</button>
									<button className="buttonProject">
										<i className="fas fa-puzzle-piece" />{" "}
										Beginner
									</button>
									<button className="buttonProject">
										<i className="far fa-clock" /> 8 hours
									</button>
								</div>
								<div className="col-auto">
									{" "}
									<button className="btn btn-primary btn-sm">
										Read More
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
