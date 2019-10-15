import React from 'react';
import Product from '../Product/Product'
import './Dashboard.css'
import axios from 'axios';

export default class Dashboard extends React.Component {

    constructor(){
        super()

        this.state = {
            inventory: []
          }
        }
   

    componentDidMount = () => {
        axios.get(`/api/inventory`).then(res => {
            this.setState({
              inventory: res.data
            })
          })
          .catch(err => {
            console.log(err)
          })
      }
    
    handleDeleteProduct = (id) => {
        console.log('hit')
        axios.delete(`/api/delete/${id}`)
        .then(res => {
            res.sendStatus(200)
        })
        .catch(err => {
            console.log(err)
        })

        // this.componentDidMount() is this possible?
    }

    componentDidUpdate = () => {
        axios.get(`/api/inventory`).then(res => {
            this.setState({
              inventory: res.data
            })
          })
          .catch(err => {
            console.log(err)
          })
      }

    render(){
        return( 
            <div className='dashboard'>
                {this.state.inventory.map(element => {
                    return <Product element={element} handleDeleteProduct={this.handleDeleteProduct} setSelectedProductOnState={this.props.setSelectedProductOnState}/>
                })}
            </div>
        )
    }

}