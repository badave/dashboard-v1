import React, {Component} from 'react';
import SplitViewListbox from '@salesforce/design-system-react/components/split-view/listbox.jsx';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

class ListView extends Component {
    static propTypes = {
        onSelect: PropTypes.function
    };

    render() {
        const { tab, tasks } = this.props;

        return (
            <SplitViewListbox
                key="list-view"
                labels={{
                    header: '',
                }}
                listItem={ListItem}
                events={{
                    onSelect: (event, { item }) => {
                        this.props.onSelect(item)
                    }
                }}
                selection={[tasks[0]]}
                options={tasks[tab.id]}
            />
        );
    }
}

export default ListView;