//system import
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//in memory web api module
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.services';

//custom import
import { AppRoutingModule } from './app-routing.module';
import { HeroService } from './hero.service';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroSearchComponent } from './hero/components/hero-search.component';



@NgModule({
  imports: [
    BrowserModule, 
    FormsModule, 
    HttpModule,
    InMemoryWebApiModule.forRoot( InMemoryDataService, {delay:300} ),
    AppRoutingModule
  ],
  providers: [HeroService],
  declarations: [AppComponent, DashboardComponent, HeroesComponent, HeroDetailComponent, HeroSearchComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
