import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { AutoCompleteModule } from 'primeng/autocomplete';

const routes: Routes = [
  {path: 'fruits/home',component: HomeComponent},
  {path: 'fruits/create', component: CreateComponent},
  {path:'fruits/edit/:id', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes),FormsModule, ButtonModule,InputTextModule,AutoCompleteModule ],
  exports: [RouterModule]
})
export class FruitsRoutingModule { }
