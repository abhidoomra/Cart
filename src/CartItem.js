import React from "react";

// class based component
class CartItem extends React.Component{
    constructor(){
        // when inherited need to call super constructor
        super();
        this.state={
            price:999,
            title:'Phone',
            qty: 1,
            img: ''
        }
        // this.increaseQuantity=this.increaseQuantity.bind(this);----2nd method binding
    }
    decreaseQuantity=()=>{
        this.setState((prevState)=>{
            if(prevState.qty==0)
            return 0;
            return{
                qty:prevState.qty-1
            }
        })
    }
    increaseQuantity=()=>{
        // form 1 of setState
        // this.setState({
        //     qty:this.state.qty+1
        // })

        //setState form 2
        this.setState((prevState)=>{
                return{
                    qty: prevState.qty+1
                }
            }
        )
    }
    render(){
        // destructing
        const {price,qty,title}=this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={Styles.images}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:16}}>{title}</div>
                    <div style={{color:'#777'}}>Rs. {price}</div>
                    <div style={{color:'#777',fontSize:12}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* buttons */}
                        <img alt="decrease" onClick={this.decreaseQuantity} src="https://cdn-icons-png.flaticon.com/512/992/992683.png" className="action-icons"/>
                        <img alt="increase" onClick={this.increaseQuantity} src="https://cdn-icons-png.flaticon.com/512/1828/1828926.png" className="action-icons"/>
                        {/* <img alt="increase" onClick={this.increaseQuantity.bind(this)} src="https://cdn-icons-png.flaticon.com/512/1828/1828926.png" className="action-icons"/>             -----first method binding------ */}
                        <img alt="delete" src="https://cdn-icons-png.flaticon.com/512/565/565491.png" className="action-icons"/>
                    </div>
                </div>
            </div>
        )
    }
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