import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Microsoft365Component } from './microsoft365/microsoft365.component';
import { TeamsComponent } from './teams/teams.component';
import { WindowsComponent } from './windows/windows.component';
import { SurfaceComponent } from './surface/surface.component';
import { XboxComponent } from './xbox/xbox.component';
import { SupportComponent } from './support/support.component';
import { AllmicrosoftComponent } from './allmicrosoft/allmicrosoft.component';
import { CartComponent } from './cart/cart.component';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Microsoft365Component,
    TeamsComponent,
    WindowsComponent,
    SurfaceComponent,
    XboxComponent,
    SupportComponent,
    AllmicrosoftComponent,
    CartComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
