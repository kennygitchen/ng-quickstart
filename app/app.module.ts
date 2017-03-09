//system import
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//in memory web api module
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './hero/services/in-memory-data.services';

//custom import
import { AppRoutingModule } from './app-routing.module';
import { EventBusService } from './common/services/event/eventBus.service';
import { HeroService } from './hero/services/hero.service';
import { AppComponent } from './app.component';
import { DashboardComponent } from './hero/components/dashboard/dashboard.component';
import { HeroesComponent } from './hero/components/list/heroes.component';
import { HeroDetailComponent } from './hero/components/detail/hero-detail.component';
import { HeroSearchComponent } from './hero/components/search/hero-search.component';
import { AppEventDirective } from './common/app-event.directive';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 300 }),
    AppRoutingModule
  ],
  providers: [EventBusService, HeroService],
  declarations: [AppComponent, DashboardComponent, HeroesComponent, HeroDetailComponent, HeroSearchComponent, AppEventDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
