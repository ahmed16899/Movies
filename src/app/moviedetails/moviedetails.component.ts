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
  //movieID = new BehaviorSubject('');
  movieRecommendations:any[]=[];
  pages:string[]=[];
  img:string='https://image.tmdb.org/t/p/w500';
  ngOnInit(): void {
    this.id=this._ActivatedRoute.snapshot.params['id'];
    this.type=this._ActivatedRoute.snapshot.params['type'];
    console.log(this._ActivatedRoute.snapshot.params)
    this._moviesService.movieID.next(this._ActivatedRoute.snapshot.params['id']);
    //this.pages.push( this._moviesService.movieID.getValue());
      this._moviesService.movieID.subscribe(()=>
      {
        //this.id=this._ActivatedRoute.snapshot.params['id'];
        this._moviesService.getMovieDetails(this._moviesService.movieID.getValue(),this.type).subscribe((response)=>{
          this.__movie=response;
         //console.log(this.__movie)
        });
        this._moviesService.getRecommendations(this._moviesService.movieID.getValue(),this.type).subscribe((response)=>{
            this.movieRecommendations=response.results;
        }); 
      })   
  }
  changeMovieID(movie:any)
  {
    //this.id2=this._moviesService.movieID.getValue();
    this.pages.push( this._moviesService.movieID.getValue());
    this._moviesService.movieID.next(movie.id);
  }
  @HostListener('window:popstate', ['$event'])
  onPopState(event:any) {
    if(this.pages.length!=0)
    {
      this._moviesService.movieID.next( this.pages[this.pages.length-1]);
      this.pages.pop();
    }
  }
}
