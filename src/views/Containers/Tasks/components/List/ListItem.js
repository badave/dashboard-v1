import React, {Component} from 'react';
import formatMoney from '../../../../../utils/format-money';
import moment from 'moment';

const strings = {
    id: `ID`,
    contact_name: "Contact Name",
    revenue: "Revenue",
    commission: "Commission",
    date: "Date"
};

class ListItem extends Component {
    isSelected() {

    }

    render() {
        const { item } = this.props;

        return (
            <div>
                <div className="slds-grid slds-wrap list-item">
                    <span
                      className="list-item-label slds-truncate slds-text-body_regular slds-text-color_default slds-size_4-of-12"
                      title={item.label}
                    >
                        {item.label}
                    </span>
                    <span
                        className="slds-truncate slds-size_2-of-12"
                        title={strings.id}
                    >
                        {item.id}
                    </span>
                    <span
                        className="slds-truncate slds-size_3-of-12"
                        title={strings.contact_name}
                    >
                        {item.contact_name}
                    </span>
                    <span
                        className="list-item-label slds-truncate slds-size_3-of-12 align-right pad-right"
                        title={strings.revenue}
                    >
                        {formatMoney(item.revenue)}
                    </span>
                    <div className={`list-item-priority ${item.important ? `important`: ``}`} />
                </div>
                <div className="slds-grid slds-wrap list-item">
                    <span className="slds-truncate" title={strings.date}>
                        {moment(new Date(item.date)).format(`D MMM YYYY`)}
                    </span>
                    <span
                        className="slds-truncate slds-col_bump-left lower-case pad-right"
                        title={strings.commission}
                    >
                        {`${strings.commission} ${formatMoney(item.commission)}`}
                    </span>
                </div>
            </div>
        );
    }
}

export default ListItem;