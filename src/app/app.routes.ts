import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { InsertClientComponent } from './components/insert-client/insert-client.component';
import { SearchComponent } from "./components/search/search.component";
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export const routes: Routes = [
    {
        path: '', component: LoginComponent
    },
    {
        path: 'create', component: InsertClientComponent
    },
    {
        path: 'search', component: SearchComponent
    },
    {
        path: 'main', component: HomeComponent
    }

];


@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes), CommonModule],
    exports: [RouterModule]
})

export class AppModule { }
