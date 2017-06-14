import React from "react";
import FakeData from "./../util/DataUtil.js"
//zbędna pusta linia
import Industry from "./FilterStandardWithMore/Industry.jsx"
import Style from "./FilterStandardWithMore/Style.jsx"
import Favorites from "./FilterStandardWithoutMore/Favorites.jsx"
import Size from "./FilterStandardWithoutMore/Size.jsx"
import Orientation from "./Orientation.jsx"
import Color from "./Color/Color.jsx"
import Rating from "./Rating.jsx"   //po tym imporcie przydała by się pusta linia
export default class Sidebar extends React.Component {
    render() {
        return (
            <div className="Sidebar">
                <div className="Header">Narrow results</div>    //lepiej h1-h6
                <Orientation interactFilters={this.props.interactFilters}/>
                <Size data={FakeData.size} interactFilters={this.props.interactFilters}/>
                <Rating interactFilters={this.props.interactFilters}/>
                <Favorites interactFilters={this.props.interactFilters}/>
                <Industry data={FakeData.industry} interactFilters={this.props.interactFilters}/>
                <Color data={FakeData.colors}/>
                <Style data={FakeData.style} interactFilters={this.props.interactFilters}/>
            </div>
        )
    }
}


/**
 * w przypadku tej części aplikacji można było się zastanowić i dostrzec podobieństwa pomiędzy poszczególnymi filtrami
 * np. można było zrobić jeden komponent dla filtrów z checkboksami (wysyłać dane + header)
 * czyli inaczej tworzyć generyczne komponenty
 *
 * po za tym dane do tych filtrów powinny pochodzić z propsów a nie być pobierane z FakeData
 * jeżeli będziesz chciał zamienić źródło danych do będziesz miał sporo pracy przed sobą :)
 */
