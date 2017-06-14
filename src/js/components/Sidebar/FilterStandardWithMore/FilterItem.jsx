import React from "react";

/**
 * pozbyłbym się rozgraniczenia filtów na katalogi FilterStandardWithMore i without mode
 * w zasadzie każdy z nich powinien mieć taką opcje, ew. sterując propsem
 */
export default class FilterItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.uncheckMe = this.uncheckMe.bind(this);
        this.state = {
            selected: false,    //z propsów
        }
    }

    uncheckMe(){
        this.setState({selected:false});
    }

    //przeczytaj komentarz z Rating.jsx. Wtedy i ta część była by zmieniona
    handleInputChange(){
        if (this.state.selected===true)
            this.props.interactFilters("remove", {"name":this.props.item.name, "modifier":this.uncheckMe});
        else
            this.props.interactFilters("add", {"name":this.props.item.name, "modifier":this.uncheckMe});
        this.setState({selected:!this.state.selected});
    }

    render() {
        var selector1 = require('./../../../../img/selectedSelector.png');
        var selector2 = require('./../../../../img/unselectedSelector.png');

        return (
            <div className="FilterItem">

                <div className="Selector">
                    //formatowanie + to nie powinno być zrobione na img
                    <img src={this.state.selected?selector1:selector2} width="14px" height="14px" onClick={this.handleInputChange}/>
                </div>
                <text>{this.props.item.name}</text>
                <text className="Amount">{this.props.item.amount.toString()}</text>     //text to raczej element svg. W html nie powinien się znaleźć
            </div>
        )
    }
}


