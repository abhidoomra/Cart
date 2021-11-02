import React from "react";
import Cart from "./Cart"
import Navbar from "./Navbar";
import db from "./firebase";
import firebaseApp from "./firebase";
import { getFirestore,deleteDoc,doc,updateDoc, collection, query, where, getDocs,setDoc,onSnapshot,addDoc } from "firebase/firestore";
class App extends React.Component {
  constructor(){
    // when inherited need to call super constructor
    super();
    this.state={
        products:[
            // {
            //     price:99,
            //     title:'Phone',
            //     qty: 1,
            //     img: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=465&q=80',
            //     id:1
            // },
            // {
            //     price:999,
            //     title:'watch',
            //     qty: 1,
            //     img: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            //     id:2
            // },
            // {
            //     price:999,
            //     title:'Laptop',
            //     qty: 4,
            //     img: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1120&q=80',
            //     id:3
            // }
        ],
        loading:true
    }
    // this.increaseQuantity=this.increaseQuantity.bind(this);----2nd method binding
}
handleIncreaseQuantity=(product)=>{
    console.log('hello',product);
    const {products}=this.state;
    const index=products.indexOf(product);
    const docRef=doc(db,'products',products[index].id);
    updateDoc(docRef,{
        qty:products[index].qty+1
    }).then(()=>{console.log("success")})
    .catch(err=>{console.log(err)})
    // updateDoc()
    // products[index].qty+=1;
    // this.setState(
    //     {
    //         products:products
    //     }
    // )
}
handleDecreaseQuantity=(product)=>{
    console.log('hell',product);
    const {products}=this.state;
    const index=products.indexOf(product);
    const docRef=doc(db,'products',products[index].id);

    if(products[index].qty!==0)
    {
        updateDoc(docRef,{
            qty:products[index].qty-1
        }).then(()=>{console.log("success")})
        .catch(err=>{console.log(err)})
        // products[index].qty-=1;
        // this.setState(
        //     {
        //         products
        //     }
        // )
    }     
}
handleDeleteQuantity=(id)=>{
    const {products}=this.state;
    deleteDoc(doc(db,'products',id)).then(()=>console.log("deleted"))
    .catch((err)=>console.log(err));
    // const items=products.filter((item)=>item.id!==id)
    // this.setState({
    //     products:items
    // }
        
    // )

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
// addProduct=()=>{
//     const docRef=addDoc(collection(db,'products'),{
//         title:'earphone',
//         qty:10,
//         price:330,
//         img:"http://cdn.shopify.com/s/files/1/1676/7297/products/1MainImage3_grande.jpg?v=1620280054"
//     })
//     .then((dref)=>{
//         console.log(dref);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
    
// }
componentDidMount(){
    onSnapshot(collection(db,"products"),(snapshot)=>{
        console.log(snapshot.docs.map(doc=>doc.data()));
        const products=snapshot.docs.map(doc=>{
            const data=doc.data();
            data['id']=doc.id;
            return data;

        });
        this.setState({
            products,
            loading:false
        })
    })
    
}
render(){
  const {products}=this.state;
  return (
    <div className="App">
      <Navbar count={this.getCartCount()}/>
      {/* <button style={{padding:20,fontSize:16}} onClick={this.addProduct}>Add product</button> */}
      <Cart 
      products={products} 
      onIncreaseQuantity={this.handleIncreaseQuantity} 
      onDecreaseQuantity={this.handleDecreaseQuantity} 
      onDeleteQuantity={this.handleDeleteQuantity}/>
      {this.state.loading&&<h1>Loading...</h1>}
      <div style={{fontSize:20,textAlign:'center'}}>Total: Rs {this.getTotal()}</div>
    </div>
  );
}
  
}

export default App;
