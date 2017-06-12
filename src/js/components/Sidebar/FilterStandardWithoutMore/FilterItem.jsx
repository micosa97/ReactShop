import React from "react";

export default class FilterItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.uncheckMe=this.uncheckMe.bind(this);
        this.state = {
            selected: false,
        }
    }
    uncheckMe(){
        this.setState({selected:false});
    }

    handleInputChange(){
        if (this.state.selected===true)
            this.props.interactFilters("remove", {"name":this.props.name, "modifier":this.uncheckMe});
        else
            this.props.interactFilters("add", {"name":this.props.name, "modifier":this.uncheckMe});
        this.setState({selected:!this.state.selected});
    }


    render() {
        var selector1 = require('./../../../../img/selectedSelector.png');
        var selector2 = require('./../../../../img/unselectedSelector.png');

        return (
            <div className="FilterItem">

                <div className="Selector">
                    <img src={this.state.selected?selector1:selector2} width="14px" height="14px" onClick={this.handleInputChange}/>
                </div>
                <text>{this.props.name}</text>
                <text className="Amount"> {this.props.amount}</text>
            </div>
        )
    }
}


