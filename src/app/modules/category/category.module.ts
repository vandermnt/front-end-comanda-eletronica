import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { NewCategoryComponent } from './pages/new-category/new-category.component';



@NgModule({
  declarations: [
    CreateComponent,
    NewCategoryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CategoryModule { }
