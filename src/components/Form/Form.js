import React from 'react';
import './Form.css'

export default class Form extends React.Component {
    constructor(){
        super()

        this.state ={
            img: [],
            productName: [],
            price: 0
        }
    }

    handleImageURL = (e) => {
        this.setState({
            img: e.target.value
        })
        console.log(this.state.img)
    }

    handleProductName = (e) => {
        // console.log(this.state.productName)
        this.setState({
            productName: e.target.value
        })
        // console.log(this.state.productName)
    }

    handlePrice = (e) => {
        // console.log(this.state.price)
        this.setState({
            price: e.target.value
        })
        // console.log(this.state.price)
    }

    handleResetInputValues = () => {
        this.setState({
            img: [],
            productName: [],
            price: 0
        })
        // console.log(this.state)


    }

    render(){
        return( 
            <div id='form'>
                <section id='form-image-container'>image</section>

                <section>Image URL<input value={this.state.img} onChange={(e) => this.handleImageURL(e)}/></section>
                <section>Product Name<input value={this.state.productName} onChange={(e) => this.handleProductName(e)}/></section>
                <section>Price<input value={this.state.price} onChange={(e) => this.handlePrice(e)}/></section>
            

                <button onClick={(e) => this.handleResetInputValues()}>Cancel</button>
                <button>Add to inventory</button>
            </div>
        )
    }
}