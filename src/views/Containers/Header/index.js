import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from './assets/logo.png';
import './style.css';
import PropTypes from 'prop-types';

const strings = {
    logo: "Dashboard Logo",
    title: "Pricing Catalyst"
};

class Header extends Component {
    static propTypes = {
        collapse: PropTypes.bool,
        onCollapse: PropTypes.func
    };

    onCollapse() {
        this.props.onCollapse && this.props.onCollapse();
    }

    onExpand() {
        this.props.onExpand && this.props.onExpand();
    }

    render() {
        const { props } = this;
        return (
            <div className={`header ${props.collapse ? `collapse`: ``}`}>
                <Link to={'/'}>
                    <img src={logo}
                         alt={strings.logo}
                         className={`logo`}
                    />
                </Link>
                <div className={`header-title`}>
                    {strings.title}
                </div>
                {!props.collapse ?
                    (
                        <div className={`collapse-icon`} onClick={() => this.onCollapse()}>
                            &laquo;
                        </div>
                    ): (
                        <div className={`collapse-icon`} onClick={() => this.onExpand()}>
                            &raquo;
                        </div>
                    )
                }

            </div>
        );
    }
}

export default Header;