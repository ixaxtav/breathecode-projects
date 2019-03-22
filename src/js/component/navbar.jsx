import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import BreatheCodeLogo from "../../../src/img/breathe-code-logo-white.png";
import "../../styles/projects.css";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-light mb-2">
				<Link to="/projects">
					<img
						className="navbarImg"
						alt="Breath Code Logo"
						src={BreatheCodeLogo}
					/>
					<span
						className="navbar-brand h1 m-1"
						style={{ verticalAlign: "middle" }}>
						{this.props.navbarBrand}
					</span>
				</Link>
			</nav>
		);
	}
}

Navbar.propTypes = {
	navbarBrand: PropTypes.string
};
