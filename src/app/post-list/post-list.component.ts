import { Component, OnInit } from '@angular/core';
import { WordpressService  } from '../wordpress.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  //posts$: Observable<any[]>;
  posts: Observable<any[]>;

  constructor(private wordpressService: WordpressService) { }

  ngOnInit() {
    this.getPosts('posts');
  }

  getPosts(type: string): void{
    this.wordpressService.fetchPosts(type)
      .subscribe(posts => this.posts = posts)
  }

}
