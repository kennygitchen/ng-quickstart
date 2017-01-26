//system import
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//custom import
import { AppRoutingModule } from './app-routing.module';
import { HeroService } from './hero.service';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';



@NgModule({
  imports: [BrowserModule, FormsModule,AppRoutingModule],
  providers: [HeroService],
  declarations: [AppComponent, DashboardComponent, HeroesComponent, HeroDetailComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
