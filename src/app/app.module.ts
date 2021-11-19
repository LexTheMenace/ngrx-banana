import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  MatCardModule,
} from '@angular/material/card';
import {
  MatFormFieldModule,
} from '@angular/material/form-field';
import {
  MatInputModule,
} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BananaComponent } from './banana/banana.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './app.state';

@NgModule({
  declarations: [AppComponent, BananaComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
