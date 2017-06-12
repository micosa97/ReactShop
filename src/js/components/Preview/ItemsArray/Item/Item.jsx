import React from "react";
import Stars from "./Stars.jsx"
import Heart from "./Heart.jsx"



export default class Item extends React.Component {
    constructor(props){
        super(props);
        this.changeFavourite=this.changeFavourite.bind(this);
        this.setBorder=this.setBorder.bind(this);
        this.state= {
            isFavourite: this.props.item.isFavourite,
            isHoverIn:false
        };

    }
    changeFavourite(){
        this.setState({isFavourite: !this.state.isFavourite});
    }
    setBorder(a) {
        this.setState({isHoverIn: a});
    }

    render() {
        return (
            <div className="Item" onMouseEnter={()=>this.setBorder(true)} onMouseLeave={()=>this.setBorder(false)}>
                 <div className={(this.state.isHoverIn?'SelectedFrame':'UnselectedFrame')}>
                    <img src={require('./../../../../../img/item.jpg')}  width="177" height="108"/>

                    <div className="RowWithPics">
                        <Stars n={this.props.item.stars}/>
                        <Heart favourite={this.state.isFavourite} changeFavourite={this.changeFavourite}/>
                    </div>
                    <text className="Title">{this.props.item.description} </text>
                     <div> <text>{this.props.item.size} </text> </div>
                 </div>
            </div>
        )
    }
}



