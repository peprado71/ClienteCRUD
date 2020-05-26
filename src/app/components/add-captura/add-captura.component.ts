import { Component, OnInit } from '@angular/core';
import { CapturaService } from 'src/app/services/captura.service';

@Component({
  selector: 'app-add-captura',
  templateUrl: './add-captura.component.html',
  styleUrls: ['./add-captura.component.css']
})
export class AddCapturaComponent implements OnInit {
  captura = {
    marca: '',
    nombre_fantasia: '',
    denominacion: '',
    rnpa: ''
  };
  submitted = false;

  constructor(private capturaService: CapturaService) { }

  ngOnInit() {
  }

  saveCaptura() {
    const data = {
      marca: this.captura.marca,
      nombre_fantasia: this.captura.nombre_fantasia,
      denominacion: this.captura.denominacion,
      rnpa: this.captura.rnpa
    };

    this.capturaService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newCaptura() {
    this.submitted = false;
    this.captura = {
      marca: '',
      nombre_fantasia: '',
      denominacion: '',
      rnpa: ''
    };
  }
 
}
