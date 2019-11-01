import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { HeaderComponent } from './header/header.component'
import { serviceRecipies } from './recipe/recipe.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment'

const routes : Routes = [
  {path:"recipe/:id",component:RecipeDetailsComponent},
  {path:"**", redirectTo:"/"}
]

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      routes,
      {enableTracing: true}
    ),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [serviceRecipies],
  bootstrap: [AppComponent]
})
export class AppModule { }
