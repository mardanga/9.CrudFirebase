import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys',
  pure: false
})
export class KeysPipe implements PipeTransform {

  transform(value: any): any {
    let keys = [];

    // tslint:disable-next-line:forin
    for (let v in value) {
      console.log(v)
       keys.push(v);
    }
    console.log(keys);
    return keys;
  }

}
