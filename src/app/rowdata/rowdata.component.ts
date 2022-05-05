import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../Services/movies/movies.service';

@Component({
  selector: 'app-rowdata',
  templateUrl: './rowdata.component.html',
  styleUrls: ['./rowdata.component.css']
})
export class RowdataComponent implements OnInit {

  constructor(private _moviesService : MoviesService) { }
  @Input() type:string='';
  typeData:any[]=[];
  img:string='https://image.tmdb.org/t/p/w500';


  ngOnInit(): void {
    this._moviesService.getTrending(this.type).subscribe((response)=>{
      this.typeData=response.results.slice(0,10)
        console.log( this.typeData);     
    });
  }

}
