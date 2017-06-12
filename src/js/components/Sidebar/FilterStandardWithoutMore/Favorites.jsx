import React from "react";
import FilterItem from "./FilterItem.jsx"


export default class Favorites extends React.Component {
    render() {
        return (
            <div className="FilterStandard">
                <div className="FilterHeader"> Favorite </div>
                    <FilterItem name="Only favorites" amount="22" interactFilters={this.props.interactFilters}/>



            </div>
        )
    }
}



