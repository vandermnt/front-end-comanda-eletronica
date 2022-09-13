import { Component, OnInit } from "@angular/core";

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: "/dashboard", title: "Home", icon: "dashboard", class: "" },
  { path: "/user-profile", title: "Garçom", icon: "content_paste", class: "" },
  { path: "/typography", title: "Mesas", icon: "library_books", class: "" },
  { path: "/category", title: "Categorias", icon: "bubble_chart", class: "" },
  { path: "/product", title: "Produtos", icon: "location_on", class: "" },
  {
    path: "/upgrade",
    title: "Upgrade to PRO",
    icon: "unarchive",
    class: "active-pro",
  },
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
