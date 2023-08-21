import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import style from "../styles/Cart.module.css"
import { L } from '@/components/temp';
import data from "../public/data.json";
export const CartItem = [];

function Cart({ cartitems }) {
    const loggedInEmail = L[0];
    const user = data.credentials.find(item => item[loggedInEmail]);
    const router = useRouter();
    const[buy,setBuy]=useState("");
    function onlyUnique(value, index, array) {
        return array.findIndex(item => item.id === value.id) === index;
    }
    function handleBuy(item){
        if(loggedInEmail)
        {
            setBuy(` ${user[loggedInEmail].name}  ${item.title} will be deliverd to ${user[loggedInEmail].Address}`)
        }
        else{
            setBuy("")
            alert(`Login to Buy your ${item.title}`)
        }
    }
    var items = CartItem.filter(onlyUnique);

    function addToCart(item) {
        CartItem.push(item);
        router.push('/cart')
    }
    function removeCart(item) {
        const index = CartItem.findIndex(cartItem => cartItem.id === item.id);
        if (index !== -1) {
            CartItem.splice(index, 1);
        }
        router.push('/cart')
    }
    function getItemCount(item) {
        return CartItem.filter(cartItem => cartItem.id === item.id).length;
    }
    
    return (
        
        <div className={style.allCart}>
            
            
            {items && items.map((i) => (
                <div className={style.eachCart} key={i.id}>
                    <ul className={style.cartItems}>
                        <li className={style.cartTitle} onClick={() => router.push(`/products/${i.id}`)}>
                            <h1>

                            {i.title}
                            </h1>
                            <Image className={style.cimg} src={i.imageSrc} width={400} height={300} alt={i.title} />
                            <h3>

                            {i.price}
                            </h3>
                        </li>
                        <li className={style.cartSummary} onClick={() => router.push(`/products/${i.id}`)}>
                            <p> {i.summary}  </p> 
                        </li>
                        <button className={style.minus} onClick={() => removeCart(i)}>-</button> {getItemCount(i)} <button className={style.plus} onClick={() => addToCart(i)}>+</button>
                        <button className={style.buynow} onClick={() => handleBuy(i)}>Buy Now</button>

                    </ul>
                </div>
            ))}
            {buy!==""?
            <div className={style.buynow}>{buy}</div>:<></>
            }
        </div>
    );
}

export default Cart;
