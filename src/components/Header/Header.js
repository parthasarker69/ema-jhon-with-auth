import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';

const Header = () => {

    const [user] = useAuthState(auth);
    const [signOut] = useSignOut(auth);

    const handleSignOut = () => {
        signOut();
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/home">Home</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user ?
                        <Link to="" onClick={() => signOut()}>Sign out</Link> :
                        <Link to="/signin">Sign In</Link>
                }
            </div>
        </nav>
    );
};

export default Header;