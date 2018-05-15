import React, {Component} from 'react';
import Tabs from './Tabs';
import SplitView from '@salesforce/design-system-react/components/split-view/index';
import Task from '../../Containers/Tasks/Task';
import './style.css';
import tasks from './mock/tasks.json';

const strings = {
    title: 'Task List'
};

class View extends Component {
    constructor() {
        super();

        const tab = `projects`;

        this.state = {
            selectedTab: tab,
            selectedTask: tasks[tab][0]
        };
    }

    render() {
        return (
            <SplitView
                id="task-view"
                masterWidth={`35rem`}
                master={(
                    <div>
                        <div className={`section-title`}>
                            {strings.title}
                        </div>
                        <Tabs
                            tasks={tasks}
                            onTabSelect={(tab) => {
                                const { state } = this;
                                state.selectedTab = tab;
                                this.setState(state);
                            }}
                            onItemSelect={(task) => {
                                const { state } = this;
                                state.selectedTask = task;
                                this.setState(state);
                            }}
                        />
                    </div>
                )}
                detail={(
                    <Task
                        data={this.state.selectedTask.data}
                    />
                )}
            />
        );
    }
}

export default View;