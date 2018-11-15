import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PlaceholderMessageComponent } from './placeholder-message/placeholder-message.component';

export interface AppState {}

const appRoutes: Routes = [
  { path: '', component: PlaceholderMessageComponent }
];

@Injectable()
export class AppStateService {
  constructor(private store: Store<AppState>) {}
}

@NgModule({
  declarations: [
    AppComponent,
    PlaceholderMessageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AppStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
