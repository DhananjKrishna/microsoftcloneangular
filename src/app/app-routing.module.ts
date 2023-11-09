import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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



const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:'365',component:Microsoft365Component,},
  {path:'teams',component:TeamsComponent,},
  {path:'windows',component:WindowsComponent,},
  {path:'surface',component:SurfaceComponent,},
  {path:'xbox',component:XboxComponent,},
  {path:'support',component:SupportComponent,},
  {path:'allmicrosoft',component:AllmicrosoftComponent,},
  {path:'cart',component:CartComponent,},
  {path:'signin',component:SigninComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
}
