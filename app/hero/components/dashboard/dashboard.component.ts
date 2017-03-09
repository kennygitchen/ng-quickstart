import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { HeroService } from '../../services/hero.service';
import { Hero } from '../../../hero';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    styleUrls: ['dashboard.component.css'],
    templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

    heroes: Hero[] = []

    constructor(private heroService: HeroService) {
    }

    ngOnInit(): void {
        this.heroService.getHeroes()
            .then((heroes) => { this.heroes = heroes.slice(1, 5); });
    }

    test() : void {
        console.error( 'event received.' )
    }
}
