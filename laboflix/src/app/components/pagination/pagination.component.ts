import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

@Output () numberPage: number | null=null

@Input () total_Pages: number = 0


  constructor() { }

  ngOnInit(): void {
  //   setTimeout(() => {
  //   console.log(this.total_Pages);
  // }, 1000);
  }

}
