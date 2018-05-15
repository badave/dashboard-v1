import React, {Component} from 'react';
import Tabs from '@salesforce/design-system-react/components/tabs';
import TabsPanel from '@salesforce/design-system-react/components/tabs/panel';
import TABS from './constants/Tabs.json';
import ListView from './List';
import tasks from './mock/tasks.json';

class TaskTabs extends Component {
    renderLabel(tab) {
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
                        label={this.renderLabel(tab)}>
                        <ListView
                            tab={tab}
                        />
                    </TabsPanel>
                ))}
            </Tabs>
        )
    }
}

export default TaskTabs;