import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
[x: string]: any;
@Input() movieList:any[] | null=null

  constructor() { }

  ngOnInit(): void {
  //  setTimeout(() => {
  //   console.log(this.movieList);
  // }, 1000);

  }
  getYear(movie:string){
    let year:string = movie.slice(0,4);
    return year; 
  }

}
