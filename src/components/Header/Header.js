import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

export default class Header extends React.Component {
    render(){
        return( 
            <div className='header'>
                
                <h1>SHELFIE</h1>

                <Link to='/'><button className='header-button'>Dashboard</button></Link>
                <Link to='/addinventory'><button className='header-button'>Add Inventory</button></Link>

            </div>
        )
    }
}