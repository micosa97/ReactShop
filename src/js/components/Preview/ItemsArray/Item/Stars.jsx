import React from "react";


export default class Stars extends React.Component {
    render() {
        var star1=require('./../../../../../img/star1.jpg');
        var star2=require('./../../../../../img/star2.jpg');
        return (
            <div className="Stars">
                {Array.apply(null, Array(5)).map((item, i) => {
                    if (i<this.props.n)
                        var star=star2;
                    else
                        var star=star1;
                    return (
                        <div key={`star ${i}`}>
                             <img src={star} width="20" height="20"/>
                        </div>)
                })}

            </div>
        )
    }
}



/**
 * nazwa komponentu to lepiej RatingStars
 * najlepiej gdyby to było utrzymywane w innym katalogu. Np. controls w components/
 */