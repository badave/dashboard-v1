import React, {Component} from 'react';
import Tabs from '@salesforce/design-system-react/components/tabs';
import TabsPanel from '@salesforce/design-system-react/components/tabs/panel';
import TABS from './constants/Tabs.json';
import ListView from './List';
import PropTypes from 'prop-types';

import Dropdown from '@salesforce/design-system-react/components/menu-dropdown';
import DropdownTrigger from '@salesforce/design-system-react/components/menu-dropdown/button-trigger';
import Button from '@salesforce/design-system-react/components/button/';

const strings = {
    sort: 'sort by'
}

class TaskTabs extends Component {
    static propTypes = {
        tasks: PropTypes.object,
        onTabSelect: PropTypes.func,
        onItemSelect: PropTypes.func,
        selected: PropTypes.object
    };

    renderLabel(tab) {
        const { tasks } = this.props;
        return (
            <div>
                <div className={`tab-title`}>
                    {tab.name}
                </div>
                <div className={`tab-count`}>{tasks[tab.id].length}</div>
            </div>
        );
    }

    render() {
        return (
            <Tabs>
                {TABS.map((tab) => (
                    <TabsPanel
                        key={tab.id}
                        label={this.renderLabel(tab)}
                        onSelect={this.props.onTabSelect}
                    >
                        <div className={`tabs-filter`}>
                            {strings.sort}
                            <Dropdown
                                align="right"
                                options={[
                                    { label: 'Deal Revenue', value: 'products' },
                                ]}
                            >
                                <DropdownTrigger>
                                    <Button iconName="down" iconPosition="right" label="Deal Revenue" />
                                </DropdownTrigger>
                            </Dropdown>
                        </div>
                        <ListView
                            tab={tab}
                            tasks={this.props.tasks}
                            onSelect={this.props.onItemSelect}
                            selected={this.props.selected}
                        />
                    </TabsPanel>
                ))}
            </Tabs>
        )
    }
}

export default TaskTabs;