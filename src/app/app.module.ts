import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';
//import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { RecipeComponent } from './recipe/recipe.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipeDetailComponent} from './recipe/recipe-detail/recipe-detail.component';
import {ShoppingListAddComponent} from './shopping-list/shopping-list-add.component';
import {RecipeItemComponent} from './recipe/recipe-list/recipe-item.component';
import {RecipeListComponent} from './recipe/recipe-list/recipe-list.component';

import {DropdownDirective} from './dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    ShoppingListComponent,
    RecipeDetailComponent,
    ShoppingListAddComponent,
    RecipeItemComponent,
    RecipeListComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  //  routing
  //  HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
