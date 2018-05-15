import React, { Component } from 'react';
import user from '../../../singletons/currentUser';
import './style.css';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';

class FooterIndex extends Component {
    render() {
        return (
            <footer>
                <div>
                    <Link to={`/dashboard/account`}>
                        {user.name}
                    </Link>
                </div>
            </footer>
        )
    }
}

export default observer(FooterIndex);

