import React from "react";
import Item from "./Item/Item.jsx"

export default class ItemsArray extends React.Component {
    render() {
        return (
            <div className="ItemsArray">
                {this.props.items.map((item, i) =>
                    <div key={`item ${i}`}>
                        <Item item={item}/>
                    </div>
                )}

            </div>
        )
    }
}

