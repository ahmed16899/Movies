import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { MoviesService } from '../Services/movies/movies.service';

@Injectable({
  providedIn: 'root'
})
export class GetSearchResolver implements Resolve<boolean> {
  constructor(private _movieService:MoviesService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const movieName = route.paramMap.get('name');
    let type = JSON.stringify(route.paramMap.get('type')) ;
    let type1 = 'movie';
   if(type.includes('movie'))
   {
      type1 = 'movie';
   } 
   else 
   {
      type1 = 'tv';
   }
   return movieName ? this._movieService.search(movieName,1,type1):EMPTY;
 } 
}
