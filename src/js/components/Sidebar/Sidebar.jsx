import React from "react";
import FakeData from "./../util/DataUtil.js"

import Industry from "./FilterStandardWithMore/Industry.jsx"
import Style from "./FilterStandardWithMore/Style.jsx"
import Favorites from "./FilterStandardWithoutMore/Favorites.jsx"
import Size from "./FilterStandardWithoutMore/Size.jsx"
import Orientation from "./Orientation.jsx"
import Color from "./Color/Color.jsx"
import Rating from "./Rating.jsx"
export default class Sidebar extends React.Component {
    render() {
        return (
            <div className="Sidebar">
                <div className="Header">Narrow results</div>
                <Orientation interactFilters={this.props.interactFilters}/>
                <Size data={FakeData.size} interactFilters={this.props.interactFilters}/>
                <Rating interactFilters={this.props.interactFilters}/>
                <Favorites interactFilters={this.props.interactFilters}/>
                <Industry data={FakeData.industry} interactFilters={this.props.interactFilters}/>
                <Color data={FakeData.colors}/>
                <Style data={FakeData.style} interactFilters={this.props.interactFilters}/>
            </div>
        )
    }
}



