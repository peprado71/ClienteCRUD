import { Component, OnInit } from '@angular/core';
import { CapturaService } from 'src/app/services/captura.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-captura-details',
  templateUrl: './captura-details.component.html',
  styleUrls: ['./captura-details.component.css']
})
export class CapturaDetailsComponent implements OnInit {

  currentCaptura = null;
  message = '';

  constructor(
    private capturaService: CapturaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.message = '';
    this.getCaptura(this.route.snapshot.paramMap.get('id'));
  }

  getCaptura(id) {
    this.capturaService.get(id)
      .subscribe(
        data => {
          this.currentCaptura = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

 

  updateCaptura() {
    this.capturaService.update(this.currentCaptura.id, this.currentCaptura)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'Captura actualizada correctamente!';
        },
        error => {
          console.log(error);
        });
  }

  deleteCaptura() {
    this.capturaService.delete(this.currentCaptura.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/capturas']);
        },
        error => {
          console.log(error);
        });
  }
}