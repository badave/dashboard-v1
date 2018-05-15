import React, {Component} from 'react';
import './style.css';
import { DiscretionCard, RevenueCard } from './components/Cards';
import PropTypes from 'prop-types';

const strings = {
    performance_summary: "Performance Summary"
};

class Task extends Component {
    static propTypes = {
        data: PropTypes.object
    };

    render() {
        if(!this.props.data) {
            return (<div></div>)
        }

        return (
            <div>
                <div className={`details-section`}>
                    <div className={`details-header`}>
                        <div className={`section-title`}>{strings.performance_summary}</div>
                        <div className={`section-nav`}>
                            <div>APAC</div>
                            <div>Q3</div>
                            <div>all product families</div>
                        </div>
                    </div>


                    <DiscretionCard
                        data={this.props.data && this.props.data.discretion}
                    />
                    <RevenueCard
                        data={this.props.data && this.props.data.revenue}
                    />
                </div>
            </div>
        );
    }
}

export default Task;