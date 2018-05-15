import React, {Component} from 'react';
import Header from '../Header/index';
import Footer from '../Footer/index';
import {withRouter, Link} from 'react-router-dom';
import Items from './constants/Items.json';
import './style.css';
import Icon from '@salesforce/design-system-react/components/icon';
import UI from '../../../singletons/ui';

class NavigationIndex extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            collapse: false
        };

    }

    toggle() {
        const state = this.state;
        state.collapse = !state.collapse;
        UI.state.set('nav-collapsed', state.collapse);
        this.setState(state);
    }

    render() {
        const {pathname} = this.props.location;
        const state = this.state;
        let size = `slds-col slds-size_1-of-5`;

        if (state.collapse) {
            size = `minimize`;
        }

        return (
            <div className={`nav-container ${size}`}>
                <Header
                    collapse={state.collapse}
                    onCollapse={() => this.toggle()}
                    onExpand={() => this.toggle()}
                />
                <nav>
                    {Object.values(Items).map((item) => {
                        const itemPath = `/dashboard/${item.route}`;
                        let activeClass = ``;
                        if (pathname === itemPath || `${pathname}/` === itemPath) {
                            activeClass = `active`;
                        }

                        return (
                            <Link to={itemPath}
                                  key={item.id}
                                  className={activeClass}
                            >
                                <Icon
                                    assistiveText="Account"
                                    category="standard"
                                    name={item.icon}
                                    size="small"
                                />
                                <span className={`nav-text`}>{item.name}</span>
                            </Link>
                        )
                    })}
                </nav>
                <Footer/>
            </div>
        )
    }
}

export default withRouter(NavigationIndex);
