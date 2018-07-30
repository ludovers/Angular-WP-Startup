import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  private url = `http://localhost:8080/wp-json/wp/v2`;
  private menuUrl = `http://localhost:8080/wp-json/wp-api-menus/v2/menu-locations`;

  constructor(private http: HttpClient) { }

  fetchPosts(type: string): Observable<any>{
    return this.http.get<any>(`${this.url}/${type}`)
      // .pipe(
      //   tap(posts => {console.log('Posts fetched')}),
      //   catchError(this.handleError('Error'))
      // )
  }

  fetchMenu(menu: string): Observable<any>{
    return this.http.get<any>(`${this.menuUrl}/${menu}`)
      // .pipe(
      //   tap(posts => {console.log('Posts fetched')}),
      //   catchError(this.handleError('Error'))
      // )
  }

  fetchPost(type: string, slug: string): Observable<any>{
    return this.http.get<any>(`${this.url}/${type}?slug=${slug}`)
      // .pipe(
      //   tap(posts => {console.log('Posts fetched')}),
      //   catchError(this.handleError('Error'))
      // )
  }

  handleError(message: string){
    console.log(message);
  }
}
