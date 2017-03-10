//system imports
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//rxjs
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
//app import
import { Hero } from '../../hero/hero';

@Injectable()
export class HeroSearchService {
    constructor(private http: Http) { }

    search(term: string): Observable<Hero[]> {
        return this.http
            .get(`app/heroes/?name=${term}`)
            .map((response) => response.json().data as Hero[]);
    }
}
