import React from 'react';
import '../styles/Card.css'
import '../styles/Colors.css'
import SkipIcon from "./card-icons/SkipIcon";

class Card extends React.Component {
    constructor() {
        super();
    }

    render() {
        let center;
        let number;
        if (isNaN(this.props.number)) {
            switch (this.props.number) {
                case 'skip':
                    center = <SkipIcon/>;
                    number = <SkipIcon/>;
                    break;
            }
        }
        else {
            center = <div className="card-center number">{this.props.number}</div>;
            number = this.props.number;
        }
        return (
            <div className={"card-container " + this.props.color}>
                <div className="card-glare"/>
                <div className="card-border-icon top">{number}</div>
                {center}
                <div className="card-border-icon bottom">{number}</div>
            </div>
        );
    }
}

export default Card;