import React, { Component } from 'react'

const Navbar=(props)=> {
        return (
            <div style={Styles.nav}>
                <div style={Styles.cartIconContainer}>
                    <img style={Styles.cartIcon}src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="cart-icon "/>
                    <span style={Styles.cartCount}>3</span>
                </div>
            </div>
        )
}
const Styles={
    cartIcon:{
        height:32,
        marginRight:20
    },
    nav:{
        height:70,
        background:'#4267b2',
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center'
    },
    cartIconContainer:{
        position:'relative',
        // background:'white'
    },
    cartCount:{
        background:'yellow',
        borderRadius:'50%',
        padding:'4px 8px',
        position:'absolute',
        // zIndex:1,
        right:0,
        top:-9
    }
}
export default Navbar;
