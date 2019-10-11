import React from 'react';
import './Form.css'
import axios from 'axios';

export default class Form extends React.Component {
    constructor(props){
        super(props)

        this.state ={
            img: [],
            name: [],
            price: 0
        }
    }

    handleImageURL = (e) => {
        this.setState({
            img: e.target.value
        })
        // console.log(this.state.img)
    }

    handleName = (e) => {
        // console.log(this.state.name)
        this.setState({
            name: e.target.value
        })
        // console.log(this.state.name)
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
            name: [],
            price: 0,
            currentProductId: null,
            editing: false
        })
        // console.log(this.state)

    }

    handleAddProduct = () => {
        const {name, price, img} = this.state
        axios.post('/api/product', {name, price, img})
        .then(res => {
            res.sendStatus(200)
        })
        .catch(err => {
            console.log(err)
        })

        this.props.getProducts()
        this.handleResetInputValues()
    }

    componentDidUpdate = (oldProps) => {
       if (oldProps.currentProduct.id != this.props.currentProduct.id) {
            this.setState({
                img: this.props.currentProduct.img,
                name: this.props.currentProduct.name,
                price: this.props.currentProduct.price
            })
            const {editing} = this.state
            this.setState({
                editing: !editing
            })
       } 

    }

    handleSaveChanges = () => {
        const {editing} = this.state
            this.setState({
                editing: !editing
            })

        this.handleResetInputValues()
    }

    handleUpdateProduct = (name, price, img, id) => {
        console.log(name, price, img, id)
        axios.put(`/api/update/${id}`, {name, price, img})
        .then(res => {
            let {name, price, img} = res.data
            this.setState({
                name: name,
                price: price,
                img: img
            })
            this.props.getProducts()
        })
    }

    render(){
        let {name, price, img} = this.state
        return( 
            <div id='form'>
                {this.state.editing ? (
                    <article>
                        <section id='form-image-container'>image</section>
                        <section>Image URL<input value={this.state.img} onChange={(e) => this.handleImageURL(e)}/></section>
                        <section>Product Name<input value={this.state.name} onChange={(e) => this.handleName(e)}/></section>
                        <section>Price<input value={this.state.price} onChange={(e) => this.handlePrice(e)}/></section>
                        <button onClick={(e) => this.handleResetInputValues()}>Cancel</button>                            
                        <button onClick={() => this.handleSaveChanges(), () => this.handleUpdateProduct(name, price, img, this.props.currentProduct.id)}>Save Changes </button>
                    </article>
                ) : (
                    <div>

                        <section id='form-image-container'>image</section>

                        <section>Image URL<input value={this.state.img} onChange={(e) => this.handleImageURL(e)}/></section>

                        <section>Product Name<input value={this.state.name} onChange={(e) => this.handleName(e)}/></section>
                        
                        <section>Price<input value={this.state.price} onChange={(e) => this.handlePrice(e)}/></section>
                    

                        <button onClick={(e) => this.handleResetInputValues()}>Cancel</button>
                        <button value={this.state.editInput} onClick={(e) => this.handleAddProduct()}>Add to inventory</button>

                    </div>
                )}
                

            </div>
        )
    }
}