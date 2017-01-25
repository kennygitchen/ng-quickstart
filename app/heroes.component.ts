// system import
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

// component imports
import { HeroService } from './hero.service'
import { Hero } from './hero';


@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  styleUrls: ['heroes.component.css'],
  templateUrl: 'heroes.component.html'
})

export class HeroesComponent implements OnInit {
  // class member
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService, private router: Router) {
  }

  ngOnInit(): void {
    this.loadHeros();
  }

  loadHeros(): void {
    this.heroService.getHeroesSlowly().then((heroes) => this.heroes = heroes);
  }

  // class methods
  onSelect(selected: Hero): void {
    this.selectedHero = selected;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}


