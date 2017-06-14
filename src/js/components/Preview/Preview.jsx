import React from "react";
import PreviewHeader from "./PreviewHeader/PreviewHeader.jsx"
import ItemsArray from "./ItemsArray/ItemsArray.jsx"

/**
 * nie podoba mi się nazwa tego komponentu. Normalnie bym szukał tutaj czegoś zupełnie innego
 * może ProductListWithFitersView? To samo tyczy nazwy PreviewHeader i ItemsArray
 *
 * ItemsArray -> ProductsList
 *
 * zmieniłbym też nazwy propsów. To co tutaj przychodzi z RootView to produkty a nie items
 * items to nazwa zbyt ogólnikowa. Wątpie, żebyś przez Item wyświetlił coś innego niż produkt właśnie
 */
export default class Preview extends React.Component {
    render() {
        return (
            <div className="Preview">
                <PreviewHeader filters={this.props.filters} interactFilters={this.props.interactFilters}/>
                <ItemsArray items={this.props.items}/>
            </div>
        )
    }
}



