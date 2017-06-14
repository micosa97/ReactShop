import React from "react";

//formatowanie
export default class Orientation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selectedOption: "horizontal"};    //powinno być z propsów i przy wykorzystaniu constów

        this.handleInputChange = this.handleInputChange.bind(this);
//formatowanie
//formatowanie
    }

//wystarczy handleChange
    handleInputChange(type) {
        if (this.state.selectedOption!==type) {     //formatowanie, spacja przed i po !==
            this.props.interactFilters("remove and add", {name: this.state.selectedOption, modifier:()=>{}}, {name: type, modifier: ()=>{}});
            this.setState({selectedOption: type});
        }
    }


	/**
     * nie będe powtarzał komentarzy. Odnajdziesz je w Rating.jsx
	 */
	render() {
        var horizontalSelected = require('./../../../img/horizontalSelected.png');
        var horizontal = require('./../../../img/horizontal.png');
        var verticalSelected = require('./../../../img/verticalSelected.png');
        var vertical = require('./../../../img/vertical.png');

//formatowanie
        return (
            <div className="FilterStandard">
                <div className="FilterHeader"> Orientation </div>
                <div className="OrientationList">
                    <div className="OrientationItem" onClick={() => this.handleInputChange("horizontal")}> <img src={this.state.selectedOption==="horizontal"?horizontalSelected:horizontal} height="50" width="50"/> <text>horizontal</text>  </div>
                    <div className="OrientationItem" onClick={() => this.handleInputChange("vertical")}> <img src={this.state.selectedOption==="vertical"?verticalSelected:vertical} height="50" width="50"/> <text>vertical</text></div>
                </div>
            </div>
        )
    }
}
