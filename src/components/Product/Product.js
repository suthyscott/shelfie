import React from 'react';
import './Product.css';
import {Link} from 'react-router-dom'

export default class Product extends React.Component {
    render(){
        // console.log(this.props.match)
        let id = this.props.element.id
        return( 
            <div className='product'>
                <img id='img' src={this.props.element.img}/>
                {this.props.element.name}
                <br/>
                {this.props.element.price}
                <br/>

                <section>
                <button className="product-buttons" onClick={() => this.props.handleDeleteProduct(this.props.element.id)}>Delete</button>
                <Link to={`/editproduct/${id}`}><button className="product-buttons" >Edit</button></Link>
                </section>
            </div>
        )
    }
}

// onClick={() => this.props.setSelectedProductOnState(this.props.element)}