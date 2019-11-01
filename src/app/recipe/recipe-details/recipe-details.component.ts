import { Component, OnInit } from '@angular/core';
import { serviceRecipies } from '../recipe.service'
import { CartService } from '../../cart.service'
import { ActivatedRoute, Router} from '@angular/router';
import { Recipe } from '../recipe.model';
import { Cart } from '../../cart.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe : Recipe;
  inCart: boolean
  cart: any

  constructor(
    private recipeService : serviceRecipies,
    private route: ActivatedRoute,
    private router: Router,
    public cartService: CartService
  ) { }

  addToCart(id:number):void{
    console.log(id)
    this.cart = this.cartService.addItem(id)
    this.inCart = true
    console.log(this.cart)
  }

  incrementCart(item):void{  
    this.cart = this.cartService.updateCart(item,'inc')
    console.log(this.cart)
  }

  decrementCart(item):void{
    this.cart = this.cartService.updateCart(item,'dec')
    if(!this.cart) this.inCart = false
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.recipe = this.recipeService.getRecipe(+params.get('id'))[0]
      if(!this.recipe) this.router.navigate(['/'])
      this.cart = this.cartService.getItem(+params.get('id'))[0]
      if(this.cart){
        this.inCart = true
      }
    })
  }

}