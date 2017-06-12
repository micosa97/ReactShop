import React from "react";
import ColorItem from "./ColorItem.jsx"

export default class Color extends React.Component {
    constructor(props) {
        super(props);
        this.state={selectedId: "2"}
        this.changeSelection=this.changeSelection.bind(this);
    }

    changeSelection (id) {
        this.setState({selectedId: id});
    }
    render() {
        return (
            <div className="Color">
                <div className="FilterHeader"> Color </div>
                <div className="Subtitle">Choose color(s):</div>
                <div className="ColorList">
                    {this.props.data.map((color, i) =>
                        <div key={`color ${i}`}>
                            <ColorItem color={color} selected={i.toString()===this.state.selectedId} changeSelection={this.changeSelection} id={i}/>
                        </div>
                    )}
                    <img src={require('./../../../../img/add.png')} height="26px" width="26px"/>
                </div>
                <div className="SubtitleGrey">or</div>
                <div className="Subtitle">Use colors from your logo</div>
                <div className="Upload"> <text> UPLOAD LOGO </text></div>

            </div>
        )
    }
}



