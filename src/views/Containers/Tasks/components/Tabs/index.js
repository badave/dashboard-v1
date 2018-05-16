import React, {Component} from 'react';
import { observer } from 'mobx-react';
import Tabs from '@salesforce/design-system-react/components/tabs';
import TabsPanel from '@salesforce/design-system-react/components/tabs/panel';
import TABS from '../../constants/Tabs.json';
import ListView from '../List/List';
import PropTypes from 'prop-types';
import './style.css';

import UI from '../../../../../singletons/ui';

import Dropdown from '@salesforce/design-system-react/components/menu-dropdown';
import DropdownTrigger from '@salesforce/design-system-react/components/menu-dropdown/button-trigger';
import Button from '@salesforce/design-system-react/components/button/';

const strings = {
    sort: 'sort by'
};

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
                <div className={`tab-count`}>
                    {tasks[tab.id].length}
                    {!UI.tabs.get(tab.id) ? (<div className={`tab-unread`}></div>): undefined}
                </div>
            </div>
        );
    }

    componentDidMount() {
        setTimeout(() => UI.tabs.set(TABS[0].id, true), 2000);
    }

    onTabSelect(index) {
        UI.tabs.set(TABS[index].id, true);
    }

    render() {
        return (
            <Tabs onSelect={(tab) => this.onTabSelect(tab)}>
                {TABS.map((tab) => (
                    <TabsPanel
                        key={tab.id}
                        label={this.renderLabel(tab)}
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

export default observer(TaskTabs);