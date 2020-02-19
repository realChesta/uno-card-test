import React from 'react';
import '../../styles/card-icons/PlusTwoIcon.css';

class PlusTwoIcon extends React.Component {
    render() {
        return (
            <div className="icon-container plus-two-flex">
                <div className="plus-two-subcontainer clearfix">
                <div className="mini-card two"/>
                <div className="mini-card two"/>
                </div>
            </div>
        );
    }
}

export default PlusTwoIcon;