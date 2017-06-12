import React from "react";

export default class MoreItems extends React.Component {
    render() {
        return (
            <div className="MoreItems">
                <img src={require('./../../../../img/add.png')} width="14px" height="14px"/>
                <div className="Caption">
                    <text> show more...</text>
                </div>
                <div className="Amount">
                    <text>{this.props.amount}</text>
                </div>
            </div>
        )
    }
}


