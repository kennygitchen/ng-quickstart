import 'rxjs/add/operator/switchMap';

import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormGroup, FormBuilder, Validators} from '@angular/forms';
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
          abilities: this.buildAbilities(hero.abilities)
        });
        window.form = this.heroDetailForm;
        this.heroDetailForm.get('name').valueChanges
          .debounceTime(300).subscribe(newValue => {
          console.error("onChange, name=" + newValue);
        });
      });
  }

  private buildAbilities(abilities: AbilityDetail[]): FormArray {
    return this.formBuilder.array(
      abilities.map(ability => {
        return this.formBuilder.group({
          type: [ability.type || '', Validators.required],
          ability: [ability.ability || '', Validators.required]
        });
      }));
  }

  get abilitiesFormArray(): FormArray {
    return this.heroDetailForm.get('abilities') as FormArray;
  }

  addAbility(): void {
    let newAbilityControl = this.formBuilder.group({
        type: ['', Validators.required],
        ability: ['', Validators.required]
      }
    );
    this.abilitiesFormArray.push(newAbilityControl);
    newAbilityControl.markAsDirty(true);
  }

  removeAbility( index: number ): void {
    this.abilitiesFormArray.removeAt( index );
    this.heroDetailForm.markAsDirty(true);
  }

  save(): void {
    if (this.heroDetailForm.invalid) {
      alert('Form contains invalid data.');
      return;
    }
    this.heroService
      .saveHero(this.heroDetailForm.getRawValue())
      .then(() => this.goBack());
  }

  revert(): void {
    this.ngOnInit();
  }

  goBack(): void {
    this.location.back();
  }
}
