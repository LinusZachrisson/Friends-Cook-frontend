import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BiUserCircle, BiSearch, BiHome, BiGroup } from 'react-icons/bi';
import UserPage from './UserPage';


function Navbar() {
    // Tar bort denna styling sen
    const style = {
        display: 'flex',
        justifyContent: 'center',
        margin: '20px',
        fontSize: '25px',
    };

    return (
        <Router>
            <nav style={style}>
                <Link to='/'>
                    <div>
                        <BiHome />
                    </div>
                </Link>
                <Link to='/friends'>
                    <div>
                        <BiGroup />
                    </div>
                </Link>
                <Link to='/recipes'>
                    <div>
                        <BiSearch />
                    </div>
                </Link>
                <Link to='/mypage'>
                    <div>
                        <BiUserCircle />
                    </div>
                </Link>
            </nav>
            <Switch>
                <Route exact path='/'>
                    START
                </Route>
                <Route path='/friends'>VÄNNER</Route>
                <Route path='/recipes'>SLUMPADE RECEPT</Route>
                <Route path='/mypage'><UserPage /*user={currentUser}*//></Route> 
                <Route path='*' component='' />{' '}
                {/* Här kan vi lägga till en 404-sida sen */}
            </Switch>
        </Router>
    );
}

export default Navbar;