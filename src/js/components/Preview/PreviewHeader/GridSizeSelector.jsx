import React from "react";

export default class GridSizeSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state={selectedId:0}
        this.setSelector=this.setSelector.bind(this);
    }

    setSelector (id){
        this.setState({selectedId:id})
    }
    render() {
        var smallGridSelected = require('./../../../../img/smallGridSelected.png');
        var smallGrid = require('./../../../../img/smallGrid.png');
        var mediumGridSelected = require('./../../../../img/mediumGridSelected.png');
        var mediumGrid = require('./../../../../img/mediumGrid.png');
        var bigGridSelected = require('./../../../../img/bigGridSelected.png');
        var bigGrid = require('./../../../../img/bigGrid.png');
        return (
            <div className="GridSizeSelector">
                <div className="GridItem" onClick={() => this.setSelector(0)}> <img src={this.state.selectedId===0?smallGridSelected:smallGrid} height="30" width="30"/> </div>
                <div className="GridItem" onClick={() => this.setSelector(1)}>  <img src={this.state.selectedId===1?mediumGridSelected:mediumGrid} height="30" width="30"/>  </div>
                <div className="GridItem" onClick={() => this.setSelector(2)}>  <img src={this.state.selectedId===2?bigGridSelected:bigGrid} height="30" width="30"/>  </div>

            </div>
        )
    }
}



