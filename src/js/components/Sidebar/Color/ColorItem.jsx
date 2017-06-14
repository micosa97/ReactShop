import React from "react";

export default class ColorItem extends React.Component {
    render() {
        if (this.props.selected)
            return (
                <div className="ColorItemSelected" style={{background: this.props.color}}  onClick={() => this.props.changeSelection(this.props.id.toString())}>
                    {this.props.selected && <img src={require('./../../../../img/check.png')}/>}
                </div>
            )
        else
            return (
                <div className="ColorItemUnselected" style={{background: this.props.color}}  onClick={() => this.props.changeSelection(this.props.id.toString())}/>
            )

    }
}

/**
 * najlepiej było by to ugryźć inaczej:
 *
 * return <div
 *          className="ColorItem (selected bądź brak)"
 *          style={background:}
 *          onClick={}></div>
 *
 * to w zupełności wystarczy.
 * stylujes ColorItem
 * jeżeli ColorItem ma dodatkowo klasę selected to w css na pseudoelemencie ::after bądź ::before dodajesz ikonkę chcecked z svg
 */
