import React from 'react';
import '../../styles/card-icons/PlusFourIcon.css';


class PlusFourIcon extends React.Component {
    render() {
        return (
            <div className="icon-container">
                <div className="mini-card four green"/>
                <div className="mini-card four blue"/>
                <div className="mini-card four red"/>
                <div className="mini-card four yellow"/>
            </div>
        );
    }
}

export default PlusFourIcon;