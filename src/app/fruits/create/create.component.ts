import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Fruits } from '../fruits';
import { FruitsService } from '../fruits.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
 // @Input() student ={id:'',Name:'', Number:0,Patch:''};
 fruitForm: Fruits = {
    id: 0,
    name:'',
    price: 0,
    quantity: '0',
  };
 
  constructor(private fruitService:FruitsService,
    private router:Router) {}
 
  ngOnInit(): void {}
  create(){
    this.fruitService.create(this.fruitForm).subscribe({next:(data) => {this.router.navigate(["/fruits/home"])},error:(error) => {console.log(error);}})
  }
}


