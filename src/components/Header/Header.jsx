import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';


const Header = () => {
    const {user} = useContext(AuthContext)

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">LogIn</Link>
                <Link to="/singup">SingUp</Link>
                {user && <span className='user'>Welcome {user.email}</span>}
            </div>
        </nav>
    );
};

export default Header;