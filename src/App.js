import React, { Component } from 'react';
import IconSettings from '@salesforce/design-system-react/components/icon-settings';
import BrowserRouter from './routers/Browser';
import './App.css';

class App extends Component {
  render() {
    return (
        <IconSettings iconPath="/assets/icons">
          <BrowserRouter />
        </IconSettings>
    );
  }
}

export default App;
