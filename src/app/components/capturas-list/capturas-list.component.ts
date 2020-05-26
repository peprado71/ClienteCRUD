import { Component, OnInit } from '@angular/core';
import { CapturaService } from 'src/app/services/captura.service';

@Component({
  selector: 'app-capturas-list',
  templateUrl: './capturas-list.component.html',
  styleUrls: ['./capturas-list.component.css']
})
export class CapturasListComponent implements OnInit {
  capturas: any;
  currentCaptura = null;
  currentIndex = -1;
  marca = '';

  constructor(private capturaService: CapturaService) { }

  ngOnInit() {
    this.retrieveCapturas();
  }

  retrieveCapturas() {
    this.capturaService.getAll()
      .subscribe(
        data => {
          this.capturas = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrieveCapturas();
    this.currentCaptura = null;
    this.currentIndex = -1;
  }

  setActiveCaptura(captura, index) {
    this.currentCaptura = captura;
    this.currentIndex = index;
  }

  removeAllCapturas() {
    this.capturaService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveCapturas();
        },
        error => {
          console.log(error);
        });
  }

  searchMarca() {
    this.capturaService.findByMarca(this.marca)
      .subscribe(
        data => {
          this.capturas = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  
  saveCapturas() {
    this.capturaService.createAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveCapturas();
        },
        error => {
          console.log(error);
        });
  }

}