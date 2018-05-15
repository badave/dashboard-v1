import React, { Component } from 'react';
import Tasks from '../../Containers/Tasks';
import { observer } from 'mobx-react';
import UI from '../../../singletons/ui';

class TaskIndex extends Component {
    render() {
        let size = 'slds-size_4-of-5';

        if(UI.state.get('nav-collapsed')) {
            size = 'slds-size_11-of-12';
        }

        return (
          <div className={`slds-col ${size} slds-col_bump-left`}>
              <Tasks />
          </div>
        );
    }
}

export default observer(TaskIndex);