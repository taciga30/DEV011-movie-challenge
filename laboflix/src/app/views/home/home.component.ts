import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: any = {};

  constructor(private service: MoviesService ){

  }

  ngOnInit(): void {
    this.service.getMovies().subscribe(movies=> {
      this.movies = movies.results;
      console.log(this.movies);

    });
  }

}
