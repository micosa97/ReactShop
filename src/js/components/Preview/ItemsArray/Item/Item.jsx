import React from "react";
import Stars from "./Stars.jsx"
import Heart from "./Heart.jsx"
//formatowanie


export default class Item extends React.Component {
    constructor(props){
        super(props);
        this.changeFavourite=this.changeFavourite.bind(this);
        this.setBorder=this.setBorder.bind(this);
        this.state= {
            isFavourite: this.props.item.isFavourite,
            isHoverIn:false     //hover przez css.
        };

    }
    changeFavourite(){  //patrząc na ciało metody to raczej toggleFavourite()
        this.setState({isFavourite: !this.state.isFavourite});
    }
    setBorder(a) {  //nie używamy skrótowych, nic nie mówiących zmiennych
        this.setState({isHoverIn: a});
    }

    render() {
        return (
            <div className="Item" onMouseEnter={()=>this.setBorder(true)} onMouseLeave={()=>this.setBorder(false)}> //przez css
                 <div className={(this.state.isHoverIn?'SelectedFrame':'UnselectedFrame')}>
                    <img src={require('./../../../../../img/item.jpg')}  width="177" height="108"/>     //img src z propsów, brak alta

                    <div className="RowWithPics">
                        <Stars n={this.props.item.stars}/>
                        <Heart favourite={this.state.isFavourite} changeFavourite={this.changeFavourite}/>
                    </div>
                    <text className="Title">{this.props.item.description} </text> //raczej h1-h6
                     <div> <text>{this.props.item.size} </text> </div>  //zbędny markup, upraszajmy
                 </div>
            </div>
        )
    }
}



