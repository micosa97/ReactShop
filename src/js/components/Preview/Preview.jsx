import React from "react";
import PreviewHeader from "./PreviewHeader/PreviewHeader.jsx"
import ItemsArray from "./ItemsArray/ItemsArray.jsx"

export default class Preview extends React.Component {
    render() {
        return (
            <div className="Preview">
                <PreviewHeader filters={this.props.filters} interactFilters={this.props.interactFilters}/>
                <ItemsArray items={this.props.items}/>
            </div>
        )
    }
}



