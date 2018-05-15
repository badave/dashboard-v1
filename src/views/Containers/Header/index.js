import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from './assets/logo.png';
import './style.css';

// import Icon from '@salesforce/design-system-react/components/icon';

const strings = {
    logo: "Dashboard Logo",
    title: "Pricing Catalyst"
};

class Header extends Component {
    collapseNavigation() {

    }

    render() {
        return (
            <div className={`header`}>
                <Link to={'/'}>
                    <img src={logo}
                         alt={strings.logo}
                         className={`logo`}
                    />
                </Link>
                <div className={`header-title`}>
                    {strings.title}
                </div>
                <div onClick={() => this.collapseNavigation()}>

                </div>
            </div>
        );
    }
}

export default Header;