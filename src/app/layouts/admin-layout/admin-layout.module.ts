import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../dashboard/dashboard.component";
import { UserProfileComponent } from "../../modules/user-profile/user-profile.component";
import { TableListComponent } from "../../table-listt/table-list.component";
import { TypographyComponent } from "../../typography/typography.component";
import { IconsComponent } from "../../icons/icons.component";
import { MapsComponent } from "../../maps/maps.component";
import { NotificationsComponent } from "../../notifications/notifications.component";
import { UpgradeComponent } from "../../upgrade/upgrade.component";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatRippleModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSelectModule } from "@angular/material/select";
import { NewCategoryComponent } from "app/modules/category/pages/new-category/new-category.component";
import { CategoryListComponent } from "app/modules/category/pages/list-category/category-list.component";
import { CategoryService } from "app/modules/category/services/category.service";
import { HttpClientModule } from "@angular/common/http";
import { CategoryModule } from "app/modules/category/category.module";
import { ProductModule } from "app/modules/product/product.module";
import { NewProductComponent } from "app/modules/product/pages/new-product/new-product.component";
import { ProductListComponent } from "app/modules/product/pages/list-product/product-list.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    CategoryModule,
    ProductModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    NewCategoryComponent,
    CategoryListComponent,
    NewProductComponent,
    ProductListComponent,
  ],
  providers: [],
})
export class AdminLayoutModule {}
