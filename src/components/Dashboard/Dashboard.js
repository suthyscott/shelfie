import React from 'react';
import Product from '../Product/Product'
import './Dashboard.css'
import axios from 'axios';

export default class Dashboard extends React.Component {
    
    handleDeleteProduct = (id) => {
        axios.delete(`/api/delete/${id}`)
        .then(res => {
            res.status(200).send('Working')
        })
        .catch(err => {
            console.log(err)
        })

        this.props.getProducts()
    }

    render(){
        return( 
            <div className='dashboard'>
                Dashboard
                {this.props.inventory.map(element => {
                    return <Product element={element} handleDeleteProduct={this.handleDeleteProduct} setSelectedProductOnState={this.props.setSelectedProductOnState}/>
                })}
            </div>
        )
    }
}