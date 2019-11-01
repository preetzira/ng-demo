import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { serviceRecipies } from './recipe.service'

@Component({
    selector:'app-recipe',
    templateUrl:'./recipe.component.html'
})
export class RecipeComponent implements OnInit{
    @Output() eventSubmit = new EventEmitter<Event>()

    showNewRecipeForm: boolean = false;
    
    toggleNewRecipeForm(): void{
        this.showNewRecipeForm = !this.showNewRecipeForm
    }
    
    saveNewRecipe(event): void{
        event.preventDefault()
        if (event.target.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            return event.target.classList.add('was-validated');
        }
        this.recipeService.addRecipies(event)
        this.toggleNewRecipeForm()
    }

    ngOnInit(){
    }


    constructor(private recipeService: serviceRecipies) { }
}