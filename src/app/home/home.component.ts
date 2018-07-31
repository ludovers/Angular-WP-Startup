import { Component, OnInit } from '@angular/core';
import { NameService } from '../name.service';
import { Observable } from 'rxjs';
import { Name } from '../name';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name: Observable<Name>;

  constructor(
    private nameService: NameService
  ) { }

  ngOnInit() {
  }

  onKey(name: string){
    this.nameService.setName(name)
  }

  JSON(data: object){
    return JSON.stringify(data, null,"    ");
  }

}
