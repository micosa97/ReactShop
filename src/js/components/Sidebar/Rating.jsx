import React from "react";
import Stars from "./../Preview/ItemsArray/Item/Stars.jsx"

//formatowanie
export default class Rating extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selectedId: 5};       //powinno przyjść z propsów
        this.uncheckMe=this.uncheckMe.bind(this);

    }

    uncheckMe(){
        this.setState({selectedId:5});      //większego sensu w tym nie widzę :)
    }

//formatowanie
    setSelector (id){
        if (id===this.state.selectedId) {
            this.setState({selectedId: 6}); //to wraz z kolejną linijka - nie rozumiem
            this.props.interactFilters("remove", {"name":this.state.selectedId+' stars', "modifier":{}});
			/**
             * teraz pojąłem, że w początkowym modelu nie ma tych danych. Teraz je ustawiasz. Nie jest to dobre rozwiązanie.
             * Łatwo o błędy i co prawda pomogło Ci zrealizować listowanie aktywnych filtrów ale na dłuższą metę nie ma szans
             * Wtedy w tej motodzie RootView po prostu masz: określony stan poczatkowy filtrów, przesyłasz id filtru i jego wartość
             * nie musisz wtedy wysyłać lastElement, newElement
			 */
		}  else {
			this.setState({selectedId:id});     //wystarczy jeden state na metodę. Nawet jak to jest w ifach.
            this.props.interactFilters("remove and add", {"name":this.state.selectedId+' stars', "modifier":{}}, {"name":id+' stars', "modifier":this.uncheckMe});
        }

    }

//formatowanie
    render() {
        var radio1 = require('./../../../img/radio1.png');      //jak wspominałem to nie powinny być png
        var radio2 = require('./../../../img/radio2.png');
        return (
            <div className="FilterStandard">    //w sumie najlepiej nazywać className tak jak klasę komponentu
                <div className="FilterHeader"> Customers Rating </div>  //wystarczyły by h1-h6, p zamiast elementów blokowych
                <div className="Subtitle">At least</div>
                <div className="RatingSelection">
                    //bez sensu dla każdego diva podawać className=RatingItem. Powinniśmy starać się ograniczać ilość selektorów
                    //ten zapis w ogóle nie jest dla mnie akceptowalny. To powinno się robic w pętli, nie powinno być elementów img
                    <div className="RatingItem" onClick={() => this.setSelector(4)}> <img src={this.state.selectedId===4?radio2:radio1} height="15" width="15"/> <Stars n="4"/> </div>
                    <div className="RatingItem" onClick={() => this.setSelector(3)}> <img src={this.state.selectedId===3?radio2:radio1} height="15" width="15"/> <Stars n="3"/> </div>
                    <div className="RatingItem" onClick={() => this.setSelector(2)}> <img src={this.state.selectedId===2?radio2:radio1} height="15" width="15"/> <Stars n="2"/> </div>
                    <div className="RatingItem" onClick={() => this.setSelector(1)}> <img src={this.state.selectedId===1?radio2:radio1} height="15" width="15"/> <Stars n="1"/> </div>
                    //bardzo długie linie. Nie powinniśmy tak kodować. Max 80 znaków. Tutaj aż prosiło się o wstawianie
                    //kolejnych elementów html w nowych liniach
                </div>
            </div>
        )
    }
}


