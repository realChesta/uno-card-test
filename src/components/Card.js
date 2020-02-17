import React from 'react';
import '../styles/Card.css'
import '../styles/Colors.css'

class Card extends React.Component {
    constructor() {
        super();
    }

    render() {
        let center;
        if (isNaN(this.props.number)) {

        }
        else {
            center = <div className="card-center number">{this.props.number}</div>;
        }
        return (
            <div className={"card-container " + this.props.color}>
                <div className="card-glare"/>
                <div className="card-border-icon top">{this.props.number}</div>
                {center}
                <div className="card-border-icon bottom">{this.props.number}</div>
            </div>
        );
    }
}

export default Card;