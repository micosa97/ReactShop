import React from "react";
import FilterItem from "./FilterItem.jsx"
import MoreItems from "./MoreItems.jsx"

/**
 * tak jak napisałem w Sidebar.jsx. To powinien być jeden z generycznych komponentów
 */
export default class Industry extends React.Component {
    render() {
        var remains=0;  //nie wiadomo do czego służy
        return (
            <div className="FilterStandard">
                <div className="FilterHeader"> Industry </div>  //raczej h1-h6
                {this.props.data.map((item, i) => {
                    remains-=item.amount;
                    return(
                        <div key={`item ${i}`}> //jeżeli potrzebne do stylowania to w porządku. Jeżeli tylko dla key to można to dodać do <FilterItem>
                            <FilterItem item={item} interactFilters={this.props.interactFilters}/>
                        </div>
                    )
                }
                )}
                <MoreItems amount={remains+2*this.props.data[0].amount}/>   //raczej sam element <a>, który steruje state tego komponentu

            </div>
        )
    }
}



