import { Injectable } from '@angular/core';
import { Cart } from './cart.model'

@Injectable({
  providedIn: 'root'
})
export class CartService extends Cart {
  cartItems: Cart[] = []

  addItem(id:number) : Cart{
    const itemToBeAdded = new Cart(id,1)
    this.cartItems.push(itemToBeAdded)
    return itemToBeAdded
  }

  updateCart(item:Cart,operation:string){
    let itemToBeUpdated = <Cart>this.cartItems.find(cartItem=>cartItem.id === item.id)
    console.log({itemToBeUpdated},this.cartItems)
    const clonedCart = <Cart[]>[...this.cartItems.slice(0,this.cartItems.indexOf(itemToBeUpdated)),...this.cartItems.slice(this.cartItems.indexOf(itemToBeUpdated)+1,this.cartItems.length)]
    console.log(clonedCart)
    switch(operation){
      case 'inc':
        itemToBeUpdated.count++;
        this.cartItems = <Cart[]>[...clonedCart,itemToBeUpdated]
        break;
      case 'dec':
        if(itemToBeUpdated.count - 1 > 0){ 
          itemToBeUpdated.count--;
          this.cartItems = <Cart[]>[...clonedCart,itemToBeUpdated]
        } else this.cartItems = <Cart[]>[...clonedCart]
        break;
      default: 
        break;
    }
    return this.cartItems.find(cartItem=>cartItem.id === item.id)
  }

  getItem(id:number): Cart[]{
    return this.cartItems.filter(item=>item.id === id)
  }

  constructor() { super() }
}
