import React, {Component} from 'react';
import './style.css';
import { DiscretionCard, RevenueCard } from './components/Cards';

const strings = {
    performance_summary: "Performance Summary"
};

class Task extends Component {
    render() {
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


                    <DiscretionCard />
                    <RevenueCard />
                </div>
            </div>
        );
    }
}

export default Task;