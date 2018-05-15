import React, {Component} from 'react';
import './style.css';

const strings = {
    title: `Discretion`
};

class DiscretionCard extends Component {
    render() {
        return (
            <div className={`card details-card`}>
                <div className={`details-card-title`}>
                    {strings.title}
                </div>

                <div className={`details-card-body`}>
                </div>
            </div>
        )
    }
}

export default DiscretionCard;