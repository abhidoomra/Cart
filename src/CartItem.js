import React from "react";

// class based component
const CartItem=(props)=>{
    // decreaseQuantity=()=>{
    //     this.setState((prevState)=>{
    //         if(prevState.qty==0)
    //             return ;
    //         return{
    //             qty:prevState.qty-1
    //         }
    //     })
    // }
    // increaseQuantity=()=>{
    //     // form 1 of setState
    //     // this.setState({
    //     //     qty:this.state.qty+1
    //     // })

    //     setState form 2
        // this.setState((prevState)=>{
        //         return{
        //             qty: prevState.qty+1
        //         }
        //     }
        // )
    // }
        // destructing
        const {price,qty,title}=props.product;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={Styles.images} src={props.product.img}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:16}}>{title}</div>
                    <div style={{color:'#777'}}>Rs. {price}</div>
                    <div style={{color:'#777',fontSize:12}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* buttons */}
                        <img alt="decrease" onClick={()=>props.onDecreaseQuantity(props.product)} src="https://cdn-icons-png.flaticon.com/512/992/992683.png" className="action-icons"/>
                        <img alt="increase" onClick={()=>props.onIncreaseQuantity(props.product)} src="https://cdn-icons-png.flaticon.com/512/1828/1828926.png" className="action-icons"/>
                        {/* <img alt="increase" onClick={this.increaseQuantity.bind(this)} src="https://cdn-icons-png.flaticon.com/512/1828/1828926.png" className="action-icons"/>             -----first method binding------ */}
                        <img alt="delete" onClick={()=>props.onDeleteQuantity(props.product.id)} src="https://cdn-icons-png.flaticon.com/512/565/565491.png" className="action-icons"/>
                    </div>
                </div>
            </div>
        )
}
const Styles={
    images:{
      height:110,
      width:110,
      borderRadius:50,
      background:'#ccc'

    }
  }
export default CartItem;