import React from "react";

export class Duration extends React.Component {
	constructor() {
		super();
		this.state = { value: 3 };
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	render() {
		return (
			<div>
				<div className="row">
					<div className="col-4 text-center">{this.state.value}</div>
				</div>{" "}
				<div className="w-100" />
				<div className="col-4">
					<span>0 hrs </span>
					<label>
						<input
							id="typeinp"
							type="range"
							min="0"
							max="24"
							value={this.state.value}
							onChange={e => this.handleChange(e)}
							step="1"
						/>
					</label>
					<span>24 hrs </span>
				</div>{" "}
			</div>
		);
	}
}
