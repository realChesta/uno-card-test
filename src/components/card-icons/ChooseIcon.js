import React from 'react';
import '../../styles/card-icons/ChooseIcon.css';

class ChooseIcon extends React.Component {
    render() {
        return (
            <div className="icon-container">
                <div className="choose-circle">
                    <div className="choose-bar"/>
                    <div className="choose-bar"/>
                </div>
            </div>
        );
    }
}

export default ChooseIcon;