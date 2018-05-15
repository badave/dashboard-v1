import React, {Component} from 'react';
import './style.css';
import { Line } from 'react-chartjs-2';

import Dropdown from '@salesforce/design-system-react/components/menu-dropdown';
import DropdownTrigger from '@salesforce/design-system-react/components/menu-dropdown/button-trigger';
import Button from '@salesforce/design-system-react/components/button/';


const strings = {
    title: `Revenue vs. target`,
    ranking: `Top & Bottom 3`,
    label: "Revenue ($ in millions)"
};

class RevenueCard extends Component {
    render() {
        const { props } = this;

        if(!props.data || !props.data.data) {
            return (
                <div />
            );
        }

        const data = {
            labels: ['July', 'Aug', 'Sep', 'Oct'],
            width: '280px',
            datasets: [
                {
                    label: strings.label,
                    fill: 'origin',
                    lineTension: 0.1,
                    backgroundColor: 'rgba(255,255,255,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 3,
                    pointHitRadius: 10,
                    data: props.data.data
                }
            ]
        };

        return (
            <div className={`card details-card`}>
                <div className={`details-card-title`}>
                    {strings.title}
                </div>

                <div className={`details-card-body`}>
                    <div className={`details-chart`}>
                        <Line
                            redraw={true}
                            data={data}
                            ref={(chart) => this.chart = chart}
                        />
                    </div>

                    <div>
                        <div className={`details-ranking`}>
                            <div>{strings.ranking}</div>

                            <Dropdown
                                align="right"
                                options={[
                                    { label: 'Product family', value: 'products' },
                                ]}
                            >
                                <DropdownTrigger>
                                    <Button iconName="down" iconPosition="right" label="Product family" />
                                </DropdownTrigger>
                            </Dropdown>
                        </div>

                        <div className={`details-info`}>
                            {["top", "bottom"].map((type) => (
                                <div key={type} className={`details-info-container details-info-${type}`}>
                                    {props.data[type].map((data) => (
                                        <div className={`details-info-stat-box`} key={data.name}>
                                            <div className={`details-info-name`}>{data.name}</div>
                                            <div className={`details-info-value`}>{data.value}</div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RevenueCard;