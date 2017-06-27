import React from "react";
import ColorItem from "./ColorItem.jsx"

export default class Color extends React.Component {
    constructor(props) {
        super(props);
        this.state={selectedId: "2"}    //z propsów, z modelu początkowego
        this.changeSelection=this.changeSelection.bind(this);
    }

    changeSelection (id) {
        this.setState({selectedId: id});
    }//formatowanie, linijka przerwy pomiedzy tymi metodami
    render() {
        return (
            <div className="Color">
                //za dużo tutaj tych selektorów className. Nie mógłbyś niektórych odpuścić?
                <div className="FilterHeader"> Color </div>
                <div className="Subtitle">Choose color(s):</div>
                <div className="ColorList">
                    {this.props.data.map((color, i) =>
                        <div key={`color ${i}`}>
                            //raczej nie wiązałbym niczego po indeksie, raczej color value
                            //lepsza nazwa propsa: selected -> isSelected - od razu wskazuje na wartość typu boolean
                            <ColorItem color={color} selected={i.toString()===this.state.selectedId} changeSelection={this.changeSelection} id={i}/>
                        </div>
                    )}
                    <img src={require('./../../../../img/add.png')} height="26px" width="26px"/>    //nie na img, <button>, <a> z <i>
                </div>

                //do osobnego komponentu, i raczej poza komponentem Color
                <div className="SubtitleGrey">or</div>
                <div className="Subtitle">Use colors from your logo</div>
                <div className="Upload"> <text> UPLOAD LOGO </text></div>

            </div>
        )
    }
}



