import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './modules/category/pages/list-category/category-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'clients/list', pathMatch: 'full' },
  {
    path: 'category/list',
    component: CategoryListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
