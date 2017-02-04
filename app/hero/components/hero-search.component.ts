//system import
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//rxjs
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
// Observable operators
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
//app import
import { HeroSearchService } from '../services/hero-search.service';
import { Hero } from '../../hero';

@Component({
    moduleId: module.id,
    selector: 'hero-search',
    templateUrl: './hero-search.component.html',
    styleUrls: ['./hero-search.component.css'],
    providers: [HeroSearchService]
})
export class HeroSearchComponent implements OnInit {
    private searchTerms = new Subject<string>();
    heros: Observable<Hero[]>;

    constructor(
        private heroSearchService: HeroSearchService,
        private router: Router
    ) { }

    search(term: string) {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.heros = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap((term) => term ? this.heroSearchService.search(term) : Observable.of<Hero[]>([]))
            .catch(error => {
                console.error(error);
                return Observable.of<Hero[]>([]);
            });
    }

    goToDetail(hero: Hero): void {
        let link = ['./detail', hero.id];
        this.router.navigate(link);
    }
}




