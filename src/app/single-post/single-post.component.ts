import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WordpressService } from '../wordpress.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  post: Observable<any>

  constructor(
    private route: ActivatedRoute,
    private wordpressService: WordpressService
  ) { }

  ngOnInit() {
    const slug: string = this.route.snapshot.params.slug;
    this.getPost('posts', slug);
  }

  getPost(type: string, slug: string){
    this.wordpressService.fetchPost(type, slug)
      .subscribe(post => this.post = post)
  }

  JSON(data: object){
    return JSON.stringify(data, null,"    ");
  }

}
