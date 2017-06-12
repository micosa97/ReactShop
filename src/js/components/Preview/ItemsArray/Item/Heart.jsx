import React from "react";


export default class Heart extends React.Component {

    render() {
        if (this.props.favourite)
            var heart=require('./../../../../../img/heart2.jpg');
        else
            var heart=require('./../../../../../img/heart1.jpg');
        return (
            <div className="Heart" onClick={this.props.changeFavourite}>
                <img src={heart} width="20" height="20"/>

            </div>
        )
    }
}



