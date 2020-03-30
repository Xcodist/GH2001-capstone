import React from 'react'

export default class Cart extends React.Component {
    constructor(){
        super()
        this.state = {
            itemsCart: []
        }
        this.getItemsFromCart = this.getItemsFromCart.bind(this)
    }

    componentDidMount() {
        
        this.setState({itemsCart: this.getItemsFromCart()})
     
    }

    getItemsFromCart() {
        let cart = []
        chrome.storage.local.get(['items'], function(result) {
            cart.push(result.items)
            console.log('Value currently is ' + result.items)
        })
        return cart
    }
  
        


    render(){
        console.log(this.state)
        return(
            <div>{this.state.itemsCart}</div>
        )
    }
}