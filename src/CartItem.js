import React from "react";

// class based component
class CartItem extends React.Component{
    render(){
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={Styles.images}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:16}}>Phone</div>
                    <div style={{color:'#777'}}>Rs 999</div>
                    <div style={{fontSize:16}}>Qty: 1</div>
                    <div className="cart-item-actions">
                        {/* buttons */}
                        <img alt="decrease" src="https://cdn-icons-png.flaticon.com/512/992/992683.png" className="action-icons"/>
                        <img alt="increase" src="https://cdn-icons-png.flaticon.com/512/1828/1828926.png" className="action-icons"/>
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