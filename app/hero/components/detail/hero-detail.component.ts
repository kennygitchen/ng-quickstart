import 'rxjs/add/operator/switchMap';

import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';

import {HeroService} from '../../services/hero.service';
import {AbilityDetail} from "../../abilityDetail";
//import { Hero } from '../../hero';

@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  styleUrls: ['hero-detail.component.css'],
  templateUrl: 'hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit {

  private heroDetailForm: FormGroup;
  private abilityTypes = AbilityDetail.abilityTypes;

  constructor(private heroService: HeroService,
              private router: ActivatedRoute,
              private location: Location,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.router.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe((hero) => {
        this.heroDetailForm = this.formBuilder.group({
          id: hero.id,
          name: [hero.name, Validators.required],
          abilityDetail: this.formBuilder.group({
            type: [hero.abilities[0].type, Validators.required],
            ability: [hero.abilities[0].ability, Validators.required]
          })
        });
        this.heroDetailForm.get('name').valueChanges
          .debounceTime(300).subscribe(newValue => {
          console.error("onChange, name=" + newValue);
        });
      });
  }

  save(): void {
    if (this.heroDetailForm.invalid) {
      alert('Form contains invalid data.');
      return;
    }
    let updatedHero = this.heroDetailForm.getRawValue();
    updatedHero.abilities = [ updatedHero.abilityDetail ];
    this.heroService
      .saveHero(updatedHero)
      .then(() => this.goBack());
  }

  revert(): void {
    this.ngOnInit();
  }

  goBack(): void {
    this.location.back();
  }
}
