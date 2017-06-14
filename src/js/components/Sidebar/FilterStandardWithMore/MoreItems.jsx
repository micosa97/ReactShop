import React from "react";

export default class MoreItems extends React.Component {
    render() {
        return (
            <div className="MoreItems">
                <img src={require('./../../../../img/add.png')} width="14px" height="14px"/>    //na <i> nie na <img>, po za tym otoczone a lub button
                <div className="Caption">
                    <text> show more...</text>  //zbędny markup, po za tym <text> nie istnieje w html
                </div>
                <div className="Amount">
                    <text>{this.props.amount}</text>    //zbędny markup, wystarczy div
                </div>
            </div>
        )
    }
}


