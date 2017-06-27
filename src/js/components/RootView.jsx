import React from "react";
import Sidebar from "./Sidebar/Sidebar.jsx"
import Preview from "./Preview/Preview.jsx"
//nie potrzebna pusta linia
import FakeData from "./util/DataUtil.js"

//niepotrzebna pusta linia
export default class RootView extends React.Component {

	/**
	 * strasznie obogie filtry. Wg. mnie od modelu danych aplikacji w ogóle powinieneś rozpocząć pracę
	 */
	constructor(props) {
		super(props)
		this.interactFilters=this.interactFilters.bind(this);
		this.state= {
                items:FakeData.generateFakeItems(24),
				filters:[{"name": "horizontal", "modifier": ()=>{}}],
    }	//formatowanie, nie powinno być w tej samej kolumnie jak } zamykający ciało metody
	}

	/**
	 * podoba mi się idea tej metody ale:
	 * - źle nazwy operacji (add czy raczej select/choose)
	 * - nazwy operacji czy występujące wartości powinny być constami (nie powinniśmy używać po prostu stringów)
	 * 		potem będzie trzeba to zmieniać w n miejscach zamiast jednym bez szans pomyłki
	 * 	błędne formatowanie. Nie jest czytelna. Czasami zapis wszystkiego w jednej linii nie jest dobrym pomysłem
	 */
	interactFilters (operation, element="none", element2="none") {
		if (operation==="add")
        	this.setState({filters: this.state.filters.concat([element])});
		else if (operation==="remove" && element.name!=="vertical" && element.name!=="horizontal")
			this.setState({filters: this.state.filters.filter((i)=>(i.name !== element.name))})
		else if (operation==="replaceVH") {
			var tempArray = this.state.filters;
            if (tempArray[0].name==="vertical") tempArray[0].name="horizontal"; else tempArray[0].name="vertical";
            this.setState({filters:tempArray});
		} else if (operation==="remove and add") {
            this.setState({filters: this.state.filters.filter((i)=>(i.name !== element.name)).concat([element2])});

		}

	}

	/**
	 * do Sidebara też powinineś przesłać filtry
	 *
	 * masz strasznie dziwnie formatowanie ustawione w edytorze. Sprawdź reguły. WebStorm pozwala auto reformatować kod wg. nich
	 * chodzi o wcięcia, zamknięcia bloków {}, sposób pisania ifów. Zobacz powyżej na konstruktor, interactFilters i render. Nie wygląda to zachęcahoąco
	 */
  render() {
    return (
			<div className="RootView">
				<Sidebar interactFilters={this.interactFilters}/>
                <Preview items={this.state.items} filters={this.state.filters} interactFilters={this.interactFilters}/>
			</div>
    );
  }
}