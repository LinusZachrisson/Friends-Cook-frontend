import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BiUserCircle, BiSearch, BiHome, BiGroup } from 'react-icons/bi';

import UserPage from './UserPage';
import RandomRecipes from './RandomRecipes';
import Friends from './Friends';
import LikedRecipes from './LikedRecipes';

function Navbar({ user }) {
    return (
        <Router>
            <div className='navbar'>
                <nav>
                    <NavLink exact activeClassName='active' to='/'>
                        <div>
                            <BiHome />
                        </div>
                    </NavLink>
                    <NavLink exact activeClassName='active' to='/friends'>
                        <div>
                            <BiGroup />
                        </div>
                    </NavLink>
                    <NavLink exact activeClassName='active' to='/recipes'>
                        <div>
                            <BiSearch />
                        </div>
                    </NavLink>
                    <NavLink exact activeClassName='active' to='/mypage'>
                        <div>
                            <BiUserCircle className='navbar-mypage' />
                        </div>
                    </NavLink>
                </nav>
            </div>
            <Switch>
                <Route exact path='/' component={LikedRecipes} />
                <Route path='/friends' component={Friends} />
                <Route path='/recipes'>
                    <RandomRecipes user={user} />
                </Route>
                s
                <Route path='/mypage'>
                    <UserPage user={user} />
                </Route>
                <Route path='*' component='' />{' '}
                {/* Här kan vi lägga till en 404-sida sen */}
            </Switch>
        </Router>
    );
}

export default Navbar;
