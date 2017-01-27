import 'rxjs/add/operator/switchMap';

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
    moduleId: module.id,
    selector: 'my-hero-detail',
    styleUrls: ['hero-detail.component.css'],
    templateUrl: 'hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit {

    hero: Hero;

    constructor(
        private heroService: HeroService,
        private router: ActivatedRoute,
        private location: Location) {

    }

    ngOnInit(): void {
        this.router.params
            .switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe((hero) => this.hero = hero);
    }

    save(): void {
        this.heroService.saveHero(this.hero)
            .then(() => this.goBack());
    }

    goBack(): void {
        this.location.back();
    }
}