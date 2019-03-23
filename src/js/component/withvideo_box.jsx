import React from "react";

export class WithVideoBox extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="row border pt-2 pb-2 justify-content-between">
				<div className="col-2 align-self-center">With Video</div>
				<div className="col-2">
					<div
						className="btn-group"
						role="group"
						aria-label="Basic example">
						<button type="button" className="btn btn-outline-dark">
							Y
						</button>
						<button type="button" className="btn btn-outline-dark">
							N
						</button>
					</div>
				</div>
			</div>
		);
	}
}
