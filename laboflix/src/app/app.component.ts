import { Component } from '@angular/core';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'laboflix';

  constructor(private moviesSvc:MoviesService){
    this.moviesSvc.getMovies().subscribe(res=>{
      console.log(res);
    });
  }
}
