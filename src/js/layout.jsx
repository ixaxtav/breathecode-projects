import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/functional/scrollToTop.jsx";

import { Home } from "./views/home.jsx";
import { Projects } from "./views/projects.jsx";
import { SingleProject } from "./views/single_project.jsx";
import { Demo } from "./views/demo.jsx";
import { Single } from "./views/single.jsx";
import Store from "./store/appContext.jsx";

//create your first component
export class Layout extends React.Component {
	render() {
		return (
			<div className="d-flex flex-column h-100">
				<BrowserRouter>
					<ScrollToTop>
						<Switch>
							<Route exact path="/" component={Projects} />
							<Route
								exact
								path="/breathecode-projects"
								component={Projects}
							/>
							<Route
								exact
								path="/breathecode-projects/project1"
								component={SingleProject}
							/>
							<Route render={() => <h1>Not found!</h1>} />
						</Switch>
					</ScrollToTop>
				</BrowserRouter>
			</div>
		);
	}
}

export default Store(Layout);
