import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Store, StoreModule } from '@ngrx/store';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { reducers } from './app.state';
import { initialState } from './banana/state';

@NgModule({
  declarations: [AppComponent, BananaComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers,{initialState})
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
