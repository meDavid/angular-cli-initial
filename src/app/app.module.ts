import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppComponent } from './app.component';

export interface AppState {}

@Injectable()
export class AppStateService {
  constructor(private store: Store<AppState>) {}
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AppStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
