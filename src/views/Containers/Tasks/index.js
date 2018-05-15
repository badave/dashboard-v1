import React, {Component} from 'react';
import Tabs from './Tabs';
import SplitView from '@salesforce/design-system-react/components/split-view/index';
import Task from '../../Containers/Tasks/Task';
import './style.css';

const strings = {
    title: 'Task List'
};

class View extends Component {
    render() {
        return (
            <SplitView
                id="task-view"
                masterWidth={`35rem`}
                master={
                    (<div>
                        <div className={`section-title`}>
                            {strings.title}
                        </div>
                        <Tabs />
                    </div>)}
                detail={<Task />}
            />
        );
    }
}

export default View;