import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// toastr
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { IconComponent } from './components/icon/icon.component';
import { ComputerIconComponent } from './components/computer-icon/computer-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    IconComponent,
    ComputerIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
