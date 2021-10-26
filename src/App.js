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
    </div>
  );
}
  
}

export default App;
