import React from 'react';
import './Product.css'

export default class Product extends React.Component {
    render(){
        return( 
            <div className='product'>
                {this.props.element.img}
                {this.props.element.name}
                {this.props.element.price}

                <button onClick={() => this.props.handleDeleteProduct(this.props.element.id)}>Delete</button>
                <button onClick={() => this.props.setSelectedProductOnState(this.props.element)}>Edit</button>
            </div>
        )
    }
}