import React from "react";
import Cart from "./Cart"
import Navbar from "./Navbar";
class App extends React.Component {
  constructor(){
    // when inherited need to call super constructor
    super();
    this.state={
        products:[
            {
                price:99,
                title:'Phone',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=465&q=80',
                id:1
            },
            {
                price:999,
                title:'watch',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                id:2
            },
            {
                price:999,
                title:'Laptop',
                qty: 4,
                img: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1120&q=80',
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
handleDeleteQuantity=(id)=>{
    const {products}=this.state;
    const items=products.filter((item)=>item.id!==id)
    this.setState({
        products:items
    }
        
    )

}
getCartCount=()=>{
    const {products}=this.state;
    let count=0;
    products.forEach((product)=>{
        count+=product.qty
    })
    return count;
}
getTotal=()=>{
    const {products}=this.state;
    let price=0;
    products.forEach((product)=>{
        price+=(product.qty*product.price);
    })
    return price;
}
render(){
  const {products}=this.state;
  return (
    <div className="App">
      <Navbar count={this.getCartCount()}/>
      <Cart 
      products={products} 
      onIncreaseQuantity={this.handleIncreaseQuantity} 
      onDecreaseQuantity={this.handleDecreaseQuantity} 
      onDeleteQuantity={this.handleDeleteQuantity}/>
      <div style={{fontSize:20,textAlign:'center'}}>Total: Rs {this.getTotal()}</div>
    </div>
  );
}
  
}

export default App;
