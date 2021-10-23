import React from "react";
import CartItem from "./CartItem";

class cart extends React.Component{
    constructor(){
        // when inherited need to call super constructor
        super();
        this.state={
            products:[
                {
                    price:99,
                    title:'Phone',
                    qty: 1,
                    img: '',
                    id:1
                },
                {
                    price:999,
                    title:'watch',
                    qty: 1,
                    img: '',
                    id:2
                },
                {
                    price:999,
                    title:'Phone',
                    qty: 4,
                    img: '',
                    id:3
                }
            ]
        }
        // this.increaseQuantity=this.increaseQuantity.bind(this);----2nd method binding
    }
    handleIncreaseQuantity=(product)=>{
        console.log('hello',product);
        const {products}=this.state;
        const index=products.indexOf(product);
        products[index].qty+=1;
        this.setState(
            {
                products:products
            }
        )
    }
    handleDecreaseQuantity=(product)=>{
        console.log('hell',product);
        const {products}=this.state;
        const index=products.indexOf(product);
        if(products[index].qty!==0)
        {
            products[index].qty-=1;
            this.setState(
                {
                    products
                }
            )
        }
            
    }
    render(){
        const {products}=this.state;
        return(
            <div className="cart" >
            { 
                products.map((product)=>{
                    return <CartItem product={product} key={product.id} onIncreaseQuantity={this.handleIncreaseQuantity} onDecreaseQuantity={this.handleDecreaseQuantity}/>
                })
            }
            </div>
            
        )
    }
}
export default cart;