import React from "react";
import FilterMarker from "./FilterMarker.jsx"

export default class Filters extends React.Component {
    render() {
        return (
            <div className="Filters">
                <div className="Title">
                    <text>Showing Filters:</text> //zbędny markup
                </div>
                {this.props.filters.map((marker, i) =>
                    <div key={`marker ${i}`}>   //key w FilterMarker
                        <FilterMarker marker={marker} interactFilters={this.props.interactFilters}/>
                    </div>
                )}
            </div>
        )
    }
}

