import React from "react";
import FilterItem from "./FilterItem.jsx"
import MoreItems from "./MoreItems.jsx"

export default class Industry extends React.Component {
    render() {
        var remains=0;
        return (
            <div className="FilterStandard">
                <div className="FilterHeader"> Industry </div>
                {this.props.data.map((item, i) => {
                    remains-=item.amount;
                    return(
                        <div key={`item ${i}`}>
                            <FilterItem item={item} interactFilters={this.props.interactFilters}/>
                        </div>
                    )
                }
                )}
                <MoreItems amount={remains+2*this.props.data[0].amount}/>

            </div>
        )
    }
}



