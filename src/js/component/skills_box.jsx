import React from "react";

export class SkillsBox extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="card w-50">
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
									Always be closing
								</label>
							</div>
						</div>
					</div>
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
									Indentator
								</label>
							</div>
						</div>
					</div>
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
									Loop master
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
