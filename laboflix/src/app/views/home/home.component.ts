import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: any = {};
  totalPages: number = 0;

  constructor(private moviesService: MoviesService){}


  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void{
  this.moviesService.getMovies().subscribe(movies=> {

      this.movies = movies.results;
      // console.log(this.movies);

      // this.totalPages = movies.total_pages;
      // console.log(this.totalPages);

    });
  }


  }
