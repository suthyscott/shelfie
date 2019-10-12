import React from 'react';
import './Header.css'

export default class Header extends React.Component {
    render(){
        return( 
            <div className='header'>
                
                <h1>SHELFIE</h1>
                <button className='header-button'>Dashboard</button>
                <button className='header-button'>Add Inventory</button>

            </div>
        )
    }
}