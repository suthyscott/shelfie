import React from 'react';
import './Product.css'

export default class Product extends React.Component {
    render(){
        return( 
            <div className='product'>
                <img id='img' src={this.props.element.img}/>
                {this.props.element.name}
                <br/>
                {this.props.element.price}
                <br/>

                <section>
                <button className="product-buttons" onClick={() => this.props.handleDeleteProduct(this.props.element.id)}>Delete</button>
                <button className="product-buttons" onClick={() => this.props.setSelectedProductOnState(this.props.element)}>Edit</button>
                </section>
            </div>
        )
    }
}