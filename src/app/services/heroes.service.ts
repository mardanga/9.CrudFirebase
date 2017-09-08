import { IHeroe } from './../interfaces/IHeroe.interface';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Http, Headers } from '@angular/http';

@Injectable()
export class HeroesService {

  heroesUrl = 'https://angular-cd04a.firebaseio.com/heroes.json';
  heroeUrl = 'https://angular-cd04a.firebaseio.com/heroes/';
  constructor(
    private http: Http
  ) { }



  nuevoHeroe(heroe: IHeroe) {
    const body = JSON.stringify(heroe);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post( this.heroesUrl, body, {headers: headers} ).map(
      res => {
        // console.log(res.json);
        return res.json();
      }
    );
  }

  actualizarHeroe(heroe: IHeroe, key: string) {
      const body = JSON.stringify(heroe);
      const headers = new Headers({
      'Content-Type': 'application/json'
    });

    const urlPut = this.heroeUrl + key + '.json';

    console.log(urlPut);
    return this.http.put( urlPut, body, {headers: headers} ).map(
      res => {
        // console.log(res.json);
        return res.json();
      }
    );
  }

  getHeroe( key: string) {
    let urlGet = this.heroeUrl + key + '.json';
    return this.http.get(urlGet).map(res => res.json());
  }

  getHeroes() {
    return this.http.get(this.heroesUrl).map(res => res.json());
  }
}
