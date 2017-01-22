// system import 
import { Injectable } from '@angular/core';

// component import
import { Hero } from './hero';
import { HEROES as mock } from './mock.hero';

@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(mock);
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise((resolve) => {
            setTimeout(() => { resolve(this.getHeroes()) }, 3000);
        });
    }
}
