import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AboutComponent} from './about/about.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {TodoModule} from './todo/todo.module';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        DashboardComponent,
        AboutComponent,
        NotFoundComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        TodoModule,
        AppRoutingModule


    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
