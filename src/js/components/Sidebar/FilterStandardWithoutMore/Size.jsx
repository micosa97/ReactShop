import React from "react";
import FilterItem from "./FilterItem.jsx"


export default class Size extends React.Component {
    render() {
        return (
            <div className="FilterStandard">
                <div className="FilterHeader"> Size </div>
                {this.props.data.map((item, i) => (
                            <div key={`item ${i}`}> //formatowanie, key może być w FilterItem
                                <FilterItem name = {item.name} amount = {item.amount} interactFilters={this.props.interactFilters}/>
                            </div>
                        )
                )}
            </div>
        )
    }
}



