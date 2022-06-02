import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../Services/movies/movies.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {

  constructor(private _ActivatedRoute:ActivatedRoute,private _moviesService : MoviesService) { }
  id:string='';
  type:string=''
  __movie:any={};
  id2:string='';
  pageCounter:number=1;
  allPages:number=0;
  //movieID = new BehaviorSubject('');
  movieRecommendations:any[]=[];
  pages:string[]=[];
  img:string='https://image.tmdb.org/t/p/w500';
  ngOnInit(): void {

    this._ActivatedRoute.data.subscribe((data)=>{
      this.__movie =data['movie'];
      this.movieRecommendations =data['recommendation'].results;
      this.allPages=data['recommendation'].total_pages
    });
}
  viewMore()
  {
    this.pageCounter++;
    this._moviesService.getRecommendations(this._ActivatedRoute.snapshot.params['id'],this._ActivatedRoute.snapshot.params['type'],this.pageCounter).subscribe((response)=>{
      this.movieRecommendations.push(...response.results);
      console.log(this.pageCounter,this.allPages);
    })
  }
}
