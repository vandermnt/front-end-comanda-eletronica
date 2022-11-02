import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../dashboard/dashboard.component";
import { ListProfileComponent } from "../../modules/user-profile/list-profile/list-profile.component";
import { TableListComponent } from "../../modules/table/table-listt/table-list.component";
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
import { CategoryModule } from "app/modules/category/category.module";
import { ProductModule } from "app/modules/product/product.module";
import { NewProductComponent } from "app/modules/product/pages/new-product/new-product.component";
import { ProductListComponent } from "app/modules/product/pages/list-product/product-list.component";
import { UserProfileComponent } from "app/modules/user-profile/new-profile/user-profile.component";
import { ListCommandComponent } from "app/modules/command/page/list-order/list-command.component";
import { UserProfileModule } from "app/modules/user-profile/user-profile.module";
import { CommandModule } from "app/modules/command/command.module";
import { EditProductComponent } from "app/modules/product/pages/edit-product/edit-product.component";
import { EditCategoryComponent } from "app/modules/category/pages/edit-category/edit-category.component";
import { TableModule } from "app/modules/table/table.module";
import { NewTableComponent } from "app/modules/table/new-table/new-table.component";
import {
  CurrencyMaskConfig,
  CurrencyMaskModule,
  CURRENCY_MASK_CONFIG,
} from "ng2-currency-mask";
import { ReportListComponent } from "app/modules/reports/pages/list-report/report-list.component";
import { ReportModule } from "app/modules/reports/report.module";

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "left",
  allowNegative: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: ".",
};

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
    CommandModule,
    UserProfileModule,
    TableModule,
    CurrencyMaskModule,
    ReportModule,
  ],
  declarations: [
    DashboardComponent,
    ListCommandComponent,
    ListProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    UserProfileComponent,
    ListProfileComponent,
    NewCategoryComponent,
    CategoryListComponent,
    NewProductComponent,
    ListProfileComponent,
    ProductListComponent,
    UserProfileComponent,
    EditProductComponent,
    EditCategoryComponent,
    NewTableComponent,
    ReportListComponent,
  ],
  providers: [
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig },
  ],
})
export class AdminLayoutModule {}
