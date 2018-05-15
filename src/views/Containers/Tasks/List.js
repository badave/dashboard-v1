import React, {Component} from 'react';
import SplitViewListbox from '@salesforce/design-system-react/components/split-view/listbox.jsx';
import tasks from './mock/tasks.json';
import ListItem from './ListItem';

class ListView extends Component {
    onSelect(item) {

    }

    render() {
        const { tab } = this.props;

        return (
            <SplitViewListbox
                key="list-view"
                labels={{
                    header: '',
                }}
                listItem={ListItem}
                events={{
                    onSelect: (item) => this.onSelect(item)
                }}
                options={tasks[tab.id]}
            />
        );
    }
}

export default ListView;