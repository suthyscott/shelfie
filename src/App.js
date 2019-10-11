import React from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import axios from 'axios';
import './App.css'

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      inventory: [],
      currentProduct: []
    }
  }

  componentDidMount = () => {
    console.log("hit")
    axios.get(`/api/inventory`).then(res => {
        this.setState({
          inventory: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  setSelectedProductOnState = (product) => {      
      this.setState({
        currentProduct: product
      })
  }

  render(){
    return (
      <div className="App">
        <Header />
        <section className='main-display'>
        <Dashboard inventory={this.state.inventory} getProducts={this.componentDidMount} setSelectedProductOnState={this.setSelectedProductOnState}/>
        <Form getProducts={this.componentDidMount} currentProduct={this.state.currentProduct}/>
        </section>
      </div>
    );
  }
}

export default App;
