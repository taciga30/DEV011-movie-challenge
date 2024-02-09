import { Component, OnInit, Input } from '@angular/core';
import { GenresService } from 'src/app/services/genres.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

 genresList: any[] | null=null
 genreSelect: Number | null=null
  constructor(private genresService: GenresService) { }

  ngOnInit(): void {
  //     setTimeout(() => {
  //   console.log(this.genresList);
  // }, 1000);
  this.getGenre();
  }

  getGenre(): void {

    this.genresService.getGenre().subscribe((genres:any) => {
      // console.log(genres);
      this.genresList = genres.genres;
      console.log(this.genresList);
      // for(let i=0; i<genresList.length; i++){
      // if(genresList){
      // this.genreFilter = genresList[i].name;

      // console.log(this.genreFilter);
      // }
    // }
    });
  }

  getGenreId(event: any): void{
   this.genreSelect= event.target.value;
  }
}
