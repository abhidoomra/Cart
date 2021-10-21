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
    render(){
        const {products}=this.state;
        return(
            <div className="cart" >
            { 
                products.map((product)=>{
                    return <CartItem product={product} key={product.id}/>
                })
            }
            </div>
            
        )
    }
}
export default cart;