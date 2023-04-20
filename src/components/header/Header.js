import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
import { webContent } from '../../App';
import { Button } from '@mui/material';

const Header = () => {
    const [user, setUser] = useContext(webContent);

    return (
        <div className='header'>
            <nav className="nav">
                <ul>
                    <li className='logo'>
                        <img src={logo} alt="burj-al-arab-logo" />
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to='/Login'>Login</Link>
                    </li>
                    <li>
                        <Link to='/book'>Book</Link>
                    </li>
                    <li>
                        {
                            user && `sign in with ${user.email}`
                        }
                    </li>
                </ul>
            </nav>
            <div className='header-content'>
                <h1>Burj Al Arab</h1>
                <h3 className='header-subcontent'><strong>A global icon of Arabian luxury</strong></h3>
            </div>
        </div>
    );
};

export default Header;