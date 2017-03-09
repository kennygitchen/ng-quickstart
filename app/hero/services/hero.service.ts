// system import
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

//import rxjs
import 'rxjs/add/operator/toPromise';

// component import
import { Hero } from '../hero';

@Injectable()
export class HeroService {

    private headers = new Headers({ "Content-type": "application/json" });
    private heroesUrl = "api/heroes";

    constructor(private http: Http) {
    }

    handleError(error: any): Promise<any> {
        console.error("an error has occurred, error=" + error);
        return Promise.reject(error.message || error);
    }

    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);

    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise((resolve) => {
            setTimeout(() => { resolve(this.getHeroes()) }, 300);
        });
    }

    getHero(id: number): Promise<Hero> {
        let getHeroesUrl = `${this.heroesUrl}/${id}`;
        return this.http
            .get(getHeroesUrl)
            .toPromise()
            .then(response => response.json().data as Hero)
            .catch(this.handleError);
    }

    newHero(name: string): Promise<Hero> {
        return this.http
            .post(this.heroesUrl, JSON.stringify({ 'name': name }), { headers: this.headers })
            .toPromise()
            .then(response => response.json().data as Hero)
            .catch(this.handleError);
    }

    saveHero(hero: Hero): Promise<Hero> {
        let saveHeroUrl = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .put(saveHeroUrl, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    deleteHero(hero: Hero): Promise<void> {
        let deleteHeroUrl = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .delete(deleteHeroUrl, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }
}
