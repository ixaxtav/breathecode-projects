import React from "react";

export class DifficultiesBox extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="row border pt-2 pb-2">
				<div className="col-2 mx-auto">
					<button type="button" className="buttonsDifficulties">
						Beginner
					</button>
				</div>
				<div className="col-2 mx-auto">
					<button type="button" className="buttonsDifficulties">
						Intermediate
					</button>
				</div>
				<div className="col-2 mx-auto">
					<button type="button" className="buttonsDifficulties">
						Advance
					</button>
				</div>
			</div>
		);
	}
}
