import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { ActivityComponent } from './activity/activity.component';
import { HomeComponent } from './home/home.component';
import { SelectionComponent,SelectionDialogComponent,
         SelectionDrinksComponent } from './selection/selection.component';

const routes: Routes=[
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  },
  {
    path: 'activity',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ActivityComponent
      }
    ]
  },
  {
    path: 'selection',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: SelectionComponent,
      },
      {
        path: '',
        component: SelectionDialogComponent,
      },
      {
        path: 'drinks',
        component: SelectionDrinksComponent,
      }
    ]
  },
]

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    ActivityComponent,
    HomeComponent,
    SelectionComponent,
    SelectionDialogComponent,
    SelectionDrinksComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
