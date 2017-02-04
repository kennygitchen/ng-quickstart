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
    this.heroService.getHeroes().then((heroes) => this.heroes = heroes);
  }

  new(newHeroName: string): void {
    newHeroName = newHeroName.trim();
    if (newHeroName == null || newHeroName == '') {
      return;
    }

    this.heroService.newHero(newHeroName)
      .then(hero => {
        this.heroes.push(hero)
        //this.selectedHero = null;
      });
  }

  delete(toDelete: Hero): void {
    if (toDelete == null) {
      return;
    }

    this.heroService
      .deleteHero(toDelete)
      .then(() => {
        this.heroes = this.heroes.filter(hero => hero !== toDelete);
        if (this.selectedHero === toDelete) {
          this.selectedHero = null;
        }
      });
  }

  onSelect(selected: Hero): void {
    this.selectedHero = selected;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}


