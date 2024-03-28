import { Component } from '@angular/core';
import { RouterOutlet, RouterModule, RouterLink } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from './components/home/home.component';
import { NgOptimizedImage } from '@angular/common';
import { InsertClientComponent } from './components/insert-client/insert-client.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterModule, LoginComponent, RouterLink, SearchComponent, InsertClientComponent, NavbarComponent, FooterComponent, HomeComponent, NgOptimizedImage]
})
export class AppComponent {
  title = 'frontClient';
}
