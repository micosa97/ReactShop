import React from "react";

export default class FilterMarker extends React.Component {
    constructor (props){
        super(props);
        this.removeFromList=this.removeFromList.bind(this);
    }
    removeFromList () {
        this.props.marker.modifier();       //w tym miejscu nie wiadomo do czego służy marker.modifier()
        this.props.interactFilters("remove", this.props.marker);
//formatowanie


    }
    render() {
        return (
            <div className="FilterMarker">
                <div className="caption">
                    <text>{this.props.marker.name}</text>   //zbędny markup
                </div>
                <div className="RemoveButton">
                    //img na <i></i> + stylowanie css, po za tym otaczający element to <a> bądź <button>
                    //bardzo często podajesz wymiary width, height. To powinno być zapisane z css
                    //onclick w elemencie otaczającym z pierwszego komentarza
                    <img src={require('./../../../../../img/removeButton.png')}  width="10" height="10" onClick={this.removeFromList}/>
                </div>
            </div>

        )
    }
}

