import React from "react";

export default class FilterMarker extends React.Component {
    constructor (props){
        super(props);
        this.removeFromList=this.removeFromList.bind(this);
    }
    removeFromList () {
        this.props.marker.modifier();
        this.props.interactFilters("remove", this.props.marker);



    }
    render() {
        return (
            <div className="FilterMarker">
                <div className="caption">
                    <text>{this.props.marker.name}</text>
                </div>
                <div className="RemoveButton">
                    <img src={require('./../../../../../img/removeButton.png')}  width="10" height="10" onClick={this.removeFromList}/>
                </div>
            </div>

        )
    }
}

