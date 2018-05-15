import React, { Component } from 'react';
import Header from '../Header/index';
import Footer from '../Footer/index';
import {withRouter, Link} from 'react-router-dom';
import Items from './mock/Items.json';
import './style.css';


class NavigationIndex extends Component {
    render() {
        const { pathname } = this.props.location;
        return (
              <div className={`nav-container slds-col slds-size_1-of-5`}>
                  <Header />
                  <nav>
                    {Object.values(Items).map((item) => {
                        const itemPath = `/dashboard/${item.route}`;
                        let activeClass = ``;
                        if(pathname === itemPath || `${pathname}/` === itemPath) {
                            activeClass = `active`;
                        }

                        return (
                            <Link to={itemPath}
                                  key={item.id}
                                  className={activeClass}
                            >
                                {item.name}
                            </Link>
                        )
                    })}
                  </nav>
                  <Footer />
              </div>
        )
    }
}

export default withRouter(NavigationIndex);
