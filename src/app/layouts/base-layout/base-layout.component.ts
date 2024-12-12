import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { navItems } from '@layouts/data/nav-items';
import { MaterialModule } from '@modules/material.module';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-base-layout',
  standalone: true,
  imports: [RouterModule, MaterialModule, SidebarComponent, HeaderComponent],
  templateUrl: './base-layout.component.html',
  styleUrl: './base-layout.component.scss',
})
export class BaseLayoutComponent {
  opened = false;
  navItems = navItems;
}
