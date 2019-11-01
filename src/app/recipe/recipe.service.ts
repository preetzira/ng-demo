import { Injectable } from '@angular/core'
import { Recipe } from './recipe.model'

@Injectable({
    providedIn:"root"
})

export class serviceRecipies{
    recipies : Recipe[] = [
        new Recipe('A testing title1','A testing desc1','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-jiCc7Rpv6-ELBS7T5LQNTE-ehN0H4UvMYZfnsrLD3MJs1JHeDA&s',1),
        new Recipe('A testing title2','A testing desc2','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-jiCc7Rpv6-ELBS7T5LQNTE-ehN0H4UvMYZfnsrLD3MJs1JHeDA&s',2)
    ]

    getRecipies(): Recipe[]{
        return this.recipies
    }

    getRecipe(id:number): Recipe[]{
        return this.recipies.filter(recipe=>recipe.id === id)
    }

    addRecipies(event): void{
        const [title,desc,image] = event.target
        this.recipies.push(new Recipe(title.value,desc.value,image.value))
    }
}