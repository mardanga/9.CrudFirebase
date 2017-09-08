import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {


  heroes: any;

  constructor(private heroeSrv: HeroesService) { }

  ngOnInit() {
    this.heroeSrv.getHeroes().subscribe(
      data => {
        this.heroes = data;
      }
    );
  }

}
