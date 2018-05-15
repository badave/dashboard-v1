import React, { Component } from 'react';
import Tasks from '../../Containers/Tasks';

class TaskIndex extends Component {
    render() {
        return (
          <div className={`slds-col slds-size_4-of-5`}>
              <Tasks />
          </div>
        );
    }
}

export default TaskIndex;