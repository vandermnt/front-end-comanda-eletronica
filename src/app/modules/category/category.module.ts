import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CategoryService } from './services/category.service';
import { BackendService } from 'app/backend';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule, FormsModule, HttpClientModule],
  providers: [CategoryService, BackendService],
})
export class CategoryModule {}
