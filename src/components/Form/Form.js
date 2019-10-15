import React from 'react';
import './Form.css'
import axios from 'axios';
import {Link} from 'react-router-dom'

export default class Form extends React.Component {
    constructor(props){
        super(props)

        this.state ={
            img: 'https://icon-library.net/images/no-image-icon/no-image-icon-0.jpg',
            name: [],
            price: 0,
            editing: false
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
            // currentProductId: null,
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

        this.handleResetInputValues()
    }

    // componentDidUpdate = (oldProps) => {
    //    if (oldProps.currentProduct.id != this.props.currentProduct.id) {
    //         this.setState({
    //             img: this.props.currentProduct.img,
    //             name: this.props.currentProduct.name,
    //             price: this.props.currentProduct.price
    //         })
    //         const {editing} = this.state
    //         this.setState({
    //             editing: !editing
    //         })
    //    } 

    // }

    // componentDidUpdate = () => {
    //     if(this.state.editing === true) {
    //     this.setState({
    //         img: [],
    //         name: [],
    //         price: 0
    //     })
    //     }
    // }

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
            
        })
    }

    componentDidMount = () => {
        if(this.props.match.params.id){
            axios.get(`/api/singleproduct/${this.props.match.params.id}`).then(res => {
                console.log(res.data)
                this.setState({
                    img: res.data[0].img,
                    name: res.data[0].name,
                    price: res.data[0].price,
                    editing: true
                })
            })
            .catch(err => console.log(err))
        }
        
    }

    render(){
        let {name, price, img} = this.state
        console.log(this.state)
        return( 
            <div id='form'>
                {this.state.editing ? (
                    <article>
                        <section className='form-image-container'><img src={this.state.img}/></section>
                        <section className='inputs'>Image URL<br/><input value={this.state.img} onChange={(e) => this.handleImageURL(e)}/></section>
                        <section className='inputs'>Product Name<br/><input value={this.state.name} onChange={(e) => this.handleName(e)}/></section>
                        <section className='inputs'>Price<br/><input value={this.state.price} onChange={(e) => this.handlePrice(e)}/></section>
                        <Link to='/'><button onClick={(e) => this.handleResetInputValues()}>Cancel</button></Link>                            
                        <Link to='/'><button onClick={() => this.handleSaveChanges(), () => this.handleUpdateProduct(name, price, img, this.props.match.params.id)}>Save Changes </button></Link>
                    </article>
                ) : (
                    <div>

                        <section className='form-image-container'><img src={this.state.img}/></section>

                        <section>Image URL<br/><input value={this.state.img} onChange={(e) => this.handleImageURL(e)}/></section>

                        <section>Product Name<br/><input value={this.state.name} onChange={(e) => this.handleName(e)}/></section>
                        
                        <section>Price<br/><input value={this.state.price} onChange={(e) => this.handlePrice(e)}/></section>
                    

                        <button className='form-button' onClick={(e) => this.handleResetInputValues()}>Cancel</button>
                        <Link to='/'><button className='form-button' value={this.state.editInput} onClick={(e) => this.handleAddProduct()}>Add to inventory</button></Link>

                    </div>
                )}
                

            </div>
        )
    }
}