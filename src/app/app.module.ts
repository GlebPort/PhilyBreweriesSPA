import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreweryListComponent } from './brewery-list/brewery-list.component';
import { BreweryDetailsComponent } from './brewery-details/brewery-details.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    BreweryListComponent,
    BreweryDetailsComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({apiKey: ""}),
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'philybreweries', component: BreweryListComponent },
      {
        path: 'philybreweries/:id',
        component: BreweryDetailsComponent
      },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
