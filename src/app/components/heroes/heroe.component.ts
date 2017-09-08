import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IHeroe } from '../../interfaces/iheroe.interface';
import { HeroesService } from '../../services/heroes.service';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: IHeroe = {
    nombre: '',
    casa: 'Marvel',
    bio: ''
  }

  editando = false;
  key= '';

  constructor(
    private heroeSrv: HeroesService,
    private router: Router,
    private ar: ActivatedRoute

  ) {
    this.ar.params.subscribe(res => {
      this.key = res['id'];
      if (this.key !== 'nuevo') {
        this.editando = true;
        this.heroeSrv.getHeroe(this.key).subscribe(
          data => {
            this.heroe = data;
            console.log(data);
          }
        );
      }
    });

  }

  ngOnInit() {
  }



  guardar() {
    if (!this.editando) {
      this.heroeSrv.nuevoHeroe(this.heroe)
          .subscribe(data => {
            this.router.navigate(['/heroe', data.name])
          },
          error => console.error(error)
        );
    } else {
      this.heroeSrv.actualizarHeroe(this.heroe, this.key)
          .subscribe(data => {
            console.log(data);
          },
          error => console.error(error)
        );
    }
  }

  resetForm(formu: NgForm) {
    formu.reset({
      casa: 'Marvel'
    });
  }
}
