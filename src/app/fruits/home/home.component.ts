import { Component,OnInit } from '@angular/core';
import { Fruits } from '../fruits';
import { FruitsService } from '../fruits.service';
import { Router } from '@angular/router';
declare var window: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allFruits: Fruits[] = [];
  deleteModal: any;
  idTodelete: number = 0;
 
  constructor(private fruitService: FruitsService, private  router:Router) {}
 
  ngOnInit(): void {
    this.get();
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
  }
 
  get() {
    this.fruitService.get().subscribe((data) => {
      this.allFruits = data;
      debugger
    });
  }
  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }
  delete() {
    this.fruitService.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.allFruits = this.allFruits.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
      },
    });
  }
}
