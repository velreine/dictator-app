import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, NgForm } from '@angular/forms';
import { NewDictatorComponent } from './new-dictator/new-dictator.component';

@NgModule({
  declarations: [
    AppComponent,
    NewDictatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
