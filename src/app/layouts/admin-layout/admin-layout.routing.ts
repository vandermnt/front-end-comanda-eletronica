import { Routes } from "@angular/router";

import { ListProfileComponent } from "../../modules/user-profile/list-profile/list-profile.component";
import { TableListComponent } from "../../modules/table/table-listt/table-list.component";
import { TypographyComponent } from "../../typography/typography.component";
import { IconsComponent } from "../../icons/icons.component";
import { MapsComponent } from "../../maps/maps.component";
import { NotificationsComponent } from "../../notifications/notifications.component";
import { UpgradeComponent } from "../../upgrade/upgrade.component";
import { CategoryListComponent } from "app/modules/category/pages/list-category/category-list.component";
import { NewCategoryComponent } from "app/modules/category/pages/new-category/new-category.component";
import { ProductListComponent } from "app/modules/product/pages/list-product/product-list.component";
import { NewProductComponent } from "app/modules/product/pages/new-product/new-product.component";
import { ListCommandComponent } from "app/modules/command/page/list-order/list-command.component";
import { UserProfileComponent } from "app/modules/user-profile/new-profile/user-profile.component";
import { EditProductComponent } from "app/modules/product/pages/edit-product/edit-product.component";
import { EditCategoryComponent } from "app/modules/category/pages/edit-category/edit-category.component";
import { NewTableComponent } from "app/modules/table/new-table/new-table.component";

export const AdminLayoutRoutes: Routes = [
  // {
  //   path: '',
  //   children: [ {
  //     path: 'dashboard',
  //     component: DashboardComponent
  // }]}, {
  // path: '',
  // children: [ {
  //   path: 'userprofile',
  //   component: UserProfileComponent
  // }]
  // }, {
  //   path: '',
  //   children: [ {
  //     path: 'icons',
  //     component: IconsComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'notifications',
  //         component: NotificationsComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'maps',
  //         component: MapsComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'typography',
  //         component: TypographyComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'upgrade',
  //         component: UpgradeComponent
  //     }]
  // }
  { path: "commands", component: ListCommandComponent },
  { path: "users", component: ListProfileComponent },
  { path: "user/new", component: UserProfileComponent },
  { path: "tables", component: TableListComponent },
  { path: "typography", component: TypographyComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapsComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "upgrade", component: UpgradeComponent },
  { path: "categories", component: CategoryListComponent },
  { path: "category/new", component: NewCategoryComponent },
  { path: "products", component: ProductListComponent },
  { path: "product/new", component: NewProductComponent },
  { path: "table/new", component: NewTableComponent },
  { path: "product/edit/:id", component: EditProductComponent },
  { path: "category/edit/:id", component: EditCategoryComponent },
];
