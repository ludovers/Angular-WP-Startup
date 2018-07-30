import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../wordpress.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuItems: Observable<any[]>;

  constructor(
    private wordpressService: WordpressService
  ) { }

  ngOnInit() {
    this.getMenu('main-menu');
  }

  getMenu(menu: string): void {
    this.wordpressService.fetchMenu(menu)
      .subscribe(menuItems => this.menuItems = menuItems)
  }

  rewriteUrl(url: string) {
    if (url === window.location.origin) {
      return '/';
    }
    return url.substr(window.location.origin.length);
  }

}
