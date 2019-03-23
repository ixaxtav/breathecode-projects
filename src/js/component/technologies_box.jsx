import React from "react";

export class TechnologiesBox extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="card">
				<div className="card-body">
					<div className="row">
						<div className="col-md">
							<div className="checkbox">
								<label>
									<input
										type="checkbox"
										className="mr-1"
										style={{ verticalAlign: "middle" }}
										value=""
									/>
									React
								</label>
							</div>
							<div className="checkbox">
								<label>
									<input
										type="checkbox"
										className="mr-1"
										style={{ verticalAlign: "middle" }}
										value=""
									/>
									Javascript
								</label>
							</div>
						</div>
						<div className="col-md">
							<div className="checkbox">
								<label>
									<input
										type="checkbox"
										className="mr-1"
										style={{ verticalAlign: "middle" }}
										value=""
									/>
									Python
								</label>
							</div>
							<div className="checkbox">
								<label>
									<input
										type="checkbox"
										className="mr-1"
										style={{ verticalAlign: "middle" }}
										value=""
									/>
									HTML
								</label>
							</div>
						</div>
						<div className="col-md">
							<div className="checkbox">
								<label>
									<input
										type="checkbox"
										className="mr-1"
										style={{ verticalAlign: "middle" }}
										value=""
									/>
									{"REST API's"}
								</label>
							</div>
							<div className="checkbox">
								<label>
									<input
										type="checkbox"
										className="mr-1"
										style={{ verticalAlign: "middle" }}
										value=""
									/>
									Serialization
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
