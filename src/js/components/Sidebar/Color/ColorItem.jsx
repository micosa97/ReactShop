import React from "react";

export default class ColorItem extends React.Component {
    render() {
        if (this.props.selected)
            return (
                <div className="ColorItemSelected" style={{background: this.props.color}}  onClick={() => this.props.changeSelection(this.props.id.toString())}>
                    {this.props.selected && <img src={require('./../../../../img/check.png')}/>}
                </div>
            )
        else
            return (
                <div className="ColorItemUnselected" style={{background: this.props.color}}  onClick={() => this.props.changeSelection(this.props.id.toString())}/>
            )

    }
}
