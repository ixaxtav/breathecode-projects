import React from "react";
import { Navbar } from "../component/navbar.jsx";

export class SingleProject extends React.Component {
	render() {
		return (
			<div>
				{/* NAVBAR */}
				<div className="row">
					<div className="col-8 mr-auto">
						<Navbar navbarBrand="The PostCard" />
					</div>

					<div className="col-3 mr-auto align-self-center">
						<button
							type="button"
							className="btn btn-outline-dark  ">
							<strong>Browse All Projects </strong>
						</button>
					</div>
				</div>

				<hr className="mt-0" />

				<div className="row pl-4  justify-content-between">
					{/* DESCRIPTION PANEL */}
					<div className="col-sm-7">
						<p>
							Who does not like {"postcard's"}? This is one of
							your first exercises (if not the first) and {"it's"}{" "}
							fun and relatively easy :)
						</p>
						<p>
							{"Let's"} create a postcard with HTML5 and CSS and
							then you can share it with your mom or with your
							other half, she/he is going to be proud! :)
						</p>

						<h3>Instructions</h3>
						<hr />

						<p>
							Create the HTML and CSS needed to replicate{" "}
							<a href="#">this exact same picture.</a>
						</p>
						<p>
							Here the url for 4Geeks logo:
							<a href="#">
								http://assets.breatheco.de/apis/img/icon/4geeks.png
							</a>
						</p>

						<h3>What to do if you are stuck?</h3>
						<hr />
						<p>
							{" "}
							There is a video about this exercise, watch it if
							you are lost. But {"don't"} copy everything, try to
							code some of your own.
						</p>

						<h3>Fundamentals</h3>
						<hr />
						<p>
							{" "}
							This exercise covers the following fundamentals:{" "}
						</p>
						<ul>
							<li>Basic structure for every HTML5 website.</li>
							<li>
								The <i>Link</i> tag to import CSS Rules.
							</li>
							<li>Using google fonts.</li>
							<li>
								Using the different selectors available in CSS.
							</li>
							<li>
								Working with boxes: border, padding and margins.
							</li>
							<li>Overflow.</li>
							<li>Using a simple form.</li>
						</ul>
					</div>

					{/* GOAL PANEL */}
					<div className="col-sm-4 mx-auto">
						<div className="card">
							<div className="card-body">
								<h5 className="card-title font-italic font-weight-bold">
									Goal
								</h5>
								<h6 className=" mb-2 font-italic ">
									Create a postcard in HTML and CSS
								</h6>
								<div className="row border-bottom pb-2 pt-2">
									<div className="col">
										<i
											className="fas fa-puzzle-piece"
											style={{
												fontSize: "14px",
												verticalAlign: "middle"
											}}
										/>{" "}
										<span
											style={{ verticalAlign: "middle" }}>
											{" "}
											Difficulty{" "}
										</span>
									</div>
									<div className="col">
										Ideal for begginers
									</div>
								</div>

								<div className="row border-bottom pb-2 pt-2">
									<div className="col">
										<i
											className="fas fa-video"
											style={{
												fontSize: "14px",
												verticalAlign: "middle",
												color: "#cc0000"
											}}
										/>{" "}
										<span
											style={{ verticalAlign: "middle" }}>
											{" "}
											Video available:{" "}
										</span>
									</div>
									<div className="col">Not available</div>
								</div>

								<div className="row border-bottom pb-2 pt-2">
									<div className="col">
										<i
											className="far fa-clock"
											style={{
												fontSize: "14px",
												verticalAlign: "middle"
											}}
										/>{" "}
										<span
											style={{ verticalAlign: "middle" }}>
											{" "}
											Project average duration{" "}
										</span>
									</div>
									<div className="col">8 hours</div>
								</div>

								<div className="row border-bottom pb-2 pt-2">
									<div className="col">
										<span
											style={{ verticalAlign: "middle" }}>
											{" "}
											Technologies{" "}
										</span>
									</div>
									<div className="col">
										Python, Flask, REST {"API's"}
									</div>
								</div>

								<div className="row pb-2 pt-2">
									<div className="col">
										<span>Skills</span>
										<ul>
											<li>Always be closing</li>
											<li>Logical Thinking</li>
											<li>Tag Master</li>
										</ul>
									</div>
								</div>

								<div className="row justify-content-between">
									<div className="col-6">
										<a
											href="#"
											className="btn btn-outline-primary btn-block">
											<strong>Live Demo</strong>
										</a>
									</div>

									<div className="col-6">
										<a
											href="#"
											className="btn btn-outline-success btn-block">
											<strong>Watch Video</strong>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
