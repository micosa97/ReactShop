import React from "react";
import Stars from "./../Preview/ItemsArray/Item/Stars.jsx"


export default class Rating extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selectedId: 5};
        this.uncheckMe=this.uncheckMe.bind(this);

    }

    uncheckMe(){
        this.setState({selectedId:5});
    }


    setSelector (id){
        if (id===this.state.selectedId) {
            this.setState({selectedId: 6});
            this.props.interactFilters("remove", {"name":this.state.selectedId+' stars', "modifier":{}});
        }  else {
            this.setState({selectedId:id});
            this.props.interactFilters("remove and add", {"name":this.state.selectedId+' stars', "modifier":{}}, {"name":id+' stars', "modifier":this.uncheckMe});
        }

    }


    render() {
        var radio1 = require('./../../../img/radio1.png');
        var radio2 = require('./../../../img/radio2.png');
        return (
            <div className="FilterStandard">
                <div className="FilterHeader"> Customers Rating </div>
                <div className="Subtitle">At least</div>
                <div className="RatingSelection">
                    <div className="RatingItem" onClick={() => this.setSelector(4)}> <img src={this.state.selectedId===4?radio2:radio1} height="15" width="15"/> <Stars n="4"/> </div>
                    <div className="RatingItem" onClick={() => this.setSelector(3)}> <img src={this.state.selectedId===3?radio2:radio1} height="15" width="15"/> <Stars n="3"/> </div>
                    <div className="RatingItem" onClick={() => this.setSelector(2)}> <img src={this.state.selectedId===2?radio2:radio1} height="15" width="15"/> <Stars n="2"/> </div>
                    <div className="RatingItem" onClick={() => this.setSelector(1)}> <img src={this.state.selectedId===1?radio2:radio1} height="15" width="15"/> <Stars n="1"/> </div>
                </div>
            </div>
        )
    }
}


