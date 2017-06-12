import React from "react";
import Sidebar from "./Sidebar/Sidebar.jsx"
import Preview from "./Preview/Preview.jsx"

import FakeData from "./util/DataUtil.js"


export default class RootView extends React.Component {

	constructor(props) {
		super(props)
		this.interactFilters=this.interactFilters.bind(this);
		this.state= {
                items:FakeData.generateFakeItems(24),
				filters:[{"name": "horizontal", "modifier": ()=>{}}],
    }
	}

	interactFilters (operation, element="none", element2="none") {
		if (operation==="add")
        	this.setState({filters: this.state.filters.concat([element])});
		else if (operation==="remove" && element.name!=="vertical" && element.name!=="horizontal")
			this.setState({filters: this.state.filters.filter((i)=>(i.name !== element.name))})
		else if (operation==="replaceVH") {
			var tempArray = this.state.filters;
            if (tempArray[0].name==="vertical") tempArray[0].name="horizontal"; else tempArray[0].name="vertical";
            this.setState({filters:tempArray});
		} else if (operation==="remove and add") {
            this.setState({filters: this.state.filters.filter((i)=>(i.name !== element.name)).concat([element2])});

		}

	}

  render() {
    return (
			<div className="RootView">
				<Sidebar interactFilters={this.interactFilters}/>
                <Preview items={this.state.items} filters={this.state.filters} interactFilters={this.interactFilters}/>
			</div>
    );
  }
}