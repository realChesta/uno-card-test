import React from 'react';
import '../../styles/card-icons/SkipIcon.css';

class SkipIcon extends React.Component {
    render() {
        return (
            <div className="icon-container">
                <div className="skip-base skip-ring"/>
                <div className="skip-base skip-line"/>
            </div>
        );
    }
}

export default SkipIcon;