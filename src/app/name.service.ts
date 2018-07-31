import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Name } from './name';

@Injectable({
  providedIn: 'root'
})
export class NameService {

  name: Name = {
    name: '',
    chosen: false
  };

  constructor() { }

  setName(name: string) {
    if(name !== ''){
      this.name = {
        name: name,
        chosen: true
      }
    }else{
      this.name = {
        name: '',
        chosen: false
      }
    }
  }
}
