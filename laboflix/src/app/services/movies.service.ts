import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  [x: string]: any;

  private ApiMovies = 'https://api.themoviedb.org/3/discover/movie?api_key=60161e451538c182be3aad7a7cf4c89a&include_adult=false&include_video=false&language=es-ES&page=1&sort_by=popularity.desc';

  constructor(private http: HttpClient) { }

  public getMovies():Observable<any>{
    return this.http.get(this.ApiMovies);

  }
}
