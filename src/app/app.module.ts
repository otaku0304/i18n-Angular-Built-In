import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { FeedbackComponent } from './feedback/feedback.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LOCALE_ID } from '@angular/core';
import {HashLocationStrategy, Location, LocationStrategy} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    AboutComponent,
    HomeComponent,
    NavbarComponent,
    FeedbackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    MatFormFieldModule
  ],
  providers: [ [Location, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  { provide: LOCALE_ID, useValue: 'nl' },
  { provide: LOCALE_ID, useValue: 'en' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
