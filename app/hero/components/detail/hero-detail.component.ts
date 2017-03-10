import 'rxjs/add/operator/switchMap';

import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../../services/hero.service';
//import { Hero } from '../../hero';

@Component({
    moduleId: module.id,
    selector: 'my-hero-detail',
    styleUrls: ['hero-detail.component.css'],
    templateUrl: 'hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit {

    private heroDetailForm: FormGroup;
    private abilityTypes = ['Physical', 'Regeneration', 'Magic', 'Mental'];

    constructor(
        private heroService: HeroService,
        private router: ActivatedRoute,
        private location: Location,
        private formBuilder: FormBuilder ) {
    }

    ngOnInit(): void {
        this.router.params
            .switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe((hero) => {
              this.heroDetailForm = this.formBuilder.group( {
                id: hero.id,
                name: [hero.name, Validators.required],
                abilityType: [hero.abilityType, Validators.required]
              } );
            });
    }

    save(): void {
        this.heroService
          .saveHero( this.heroDetailForm.getRawValue() )
          .then(() => this.goBack());
    }

    goBack(): void {
        this.location.back();
    }
}
