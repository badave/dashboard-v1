import React, { Component } from 'react';
import user from '../../../singletons/currentUser';
import './style.css';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import Icon from '@salesforce/design-system-react/components/icon';


class FooterIndex extends Component {
    render() {
        return (
            <footer>
                <Link to={`/dashboard/account`}>
                    {user.name}
                </Link>
                <Icon
                    assistiveText="Logout"
                    category="utility"
                    name={`power`}
                    size="small"
                    inverse={true}
                />
            </footer>
        )
    }
}

export default observer(FooterIndex);

