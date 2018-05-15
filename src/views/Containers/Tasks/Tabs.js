import React, {Component} from 'react';
import Tabs from '@salesforce/design-system-react/components/tabs';
import TabsPanel from '@salesforce/design-system-react/components/tabs/panel';
import TABS from './constants/Tabs.json';
import ListView from './List';
import PropTypes from 'prop-types';

class TaskTabs extends Component {
    static propTypes = {
      tasks: PropTypes.object
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
                        <ListView
                            tab={tab}
                            tasks={this.props.tasks}
                            onSelect={this.props.onItemSelect}
                        />
                    </TabsPanel>
                ))}
            </Tabs>
        )
    }
}

export default TaskTabs;