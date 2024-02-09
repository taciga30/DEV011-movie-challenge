import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GenresService {

  private ApiGenreMovies = 'https://api.themoviedb.org/3/genre/movie/list?language=es-ES&api_key=60161e451538c182be3aad7a7cf4c89a';

    constructor(private http: HttpClient) { }

    public getGenre():Observable<any>{
      return this.http.get(this.ApiGenreMovies);
  }

}
