import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './shared/navbar/navbar.component';
import {RouterModule} from "@angular/router";
import { HomeComponent } from './pages/home/home.component';
import { ReviewFormComponent } from './shared/review-form/review-form.component';
import { ReviewItemComponent } from './shared/review-item/review-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ReviewFormComponent,
    ReviewItemComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        RouterModule,
    ],
  providers: [
  ],
  bootstrap: [AppComponent],
  exports: [
   NavbarComponent,
  ]
})
export class AppModule { }
