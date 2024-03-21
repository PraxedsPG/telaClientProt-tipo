import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { InsertClientComponent } from "./components/insert-client/insert-client.component";
import { SearchComponent } from "./components/search/search.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, LoginComponent, InsertClientComponent, SearchComponent]
})
export class AppComponent {
  title = 'frontClient';
}
