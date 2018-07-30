import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../wordpress.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.scss']
})
export class SinglePageComponent implements OnInit {

  post: Observable<any>;
  currentSearchQuery: string;

  constructor(
    private route: ActivatedRoute,
    private wordpressService: WordpressService
  ) { }

  ngOnInit() {
    const self = this;
    this.route.params
      .forEach(params => {
        self.post = undefined;
        const slug: string = params.slug;
        this.getPost('pages', slug)
      });
  }

  getPost(type: string, slug: string){
    this.wordpressService.fetchPost(type, slug)
      .subscribe(post => this.post = post)
  }

  JSON(data: object){
    return JSON.stringify(data, null,"    ");
  }

}
