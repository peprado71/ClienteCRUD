import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCapturaComponent } from './components/add-captura/add-captura.component';
import { CapturaDetailsComponent } from './components/captura-details/captura-details.component';
import { CapturasListComponent } from './components/capturas-list/capturas-list.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    AddCapturaComponent,
    CapturaDetailsComponent,
    CapturasListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
