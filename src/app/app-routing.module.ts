import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const routes: Routes = [{
  path: '',
  redirectTo: 'fruits/home',
  pathMatch: 'full',
},];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule,ButtonModule, BrowserAnimationsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
