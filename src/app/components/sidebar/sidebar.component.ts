import { Component, OnInit } from "@angular/core";

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: "/commands", title: "Pedidos", icon: "dashboard", class: "" },
  { path: "/users", title: "Usuários", icon: "person", class: "" },
  { path: "/tables", title: "Mesas", icon: "library_books", class: "" },
  { path: "/categories", title: "Categorias", icon: "bubble_chart", class: "" },
  {
    path: "/products",
    title: "Produtos",
    icon: "add_shopping_cart_icon",
    class: "",
  },
  { path: "/reports", title: "Relatórios", icon: "assignment", class: "" },

  // {
  //   path: "/upgrade",
  //   title: "Upgrade to PRO",
  //   icon: "unarchive",
  //   class: "active-pro",
  // },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }
}
