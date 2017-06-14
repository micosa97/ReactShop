import React from "react";
import Filters from "./Filters/Filters.jsx"
import NumberOfItemsOnPageSelector from "./NumberOfItemsOnPageSelector.jsx"
import GridSizeSelector from "./GridSizeSelector.jsx"

export default class PreviewHeader extends React.Component {
    render() {
        return (
            <div className="PreviewHeader">
                <div className="MainRow">
                    <text className="SearchResultsCounter">Search Results: <div className="Number">72</div></text>  //zbędne elementy blokowe
                    <NumberOfItemsOnPageSelector/>
                    <GridSizeSelector/>
                </div>
                <div className="FiltersRow">
                    <Filters filters={this.props.filters} interactFilters={this.props.interactFilters}/>
                </div>
//formatowanie

            </div>
        )
    }
}

