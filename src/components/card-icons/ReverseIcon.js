import React from 'react';
import '../../styles/card-icons/ReverseIcon.css';


class ReverseIcon extends React.Component {
    render() {
        return (
            <div className="icon-container reverse-container">
                <div className="reverse-arrow-base">
                    <div className="reverse-arrow-head" />
                </div>
                <div className="reverse-arrow-base">
                    <div className="reverse-arrow-head" />
                </div>
            </div>
        );
    }
}

export default ReverseIcon;