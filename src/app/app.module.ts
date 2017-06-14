import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ChartsComponent } from './charts/charts.component';

// Import the library
import {FusionChartsModule} from 'angular2-fusioncharts';

// Load FusionCharts
import * as FusionCharts from 'fusioncharts';
// Load charts module
import * as Charts from 'fusioncharts';




const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'user/:id', component: PostsComponent },
  { path: 'post/:id', component: CommentsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'charts', component: ChartsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    CommentsComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FusionChartsModule.forRoot(FusionCharts, Charts)
  ],
  exports: [ RouterModule ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
