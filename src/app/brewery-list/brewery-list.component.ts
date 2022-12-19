import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IBrewery } from '../../models/brewery';
import { BreweryService } from "../../services/brewery.service"

@Component({
  selector: 'cb-brewery-list',
  templateUrl: './brewery-list.component.html',
  styleUrls: ['./brewery-list.component.css']
})
export class BreweryListComponent implements OnInit {
  breweries: IBrewery[] = [];
  errorMessage: string = '';
  sub!: Subscription;

  constructor(private breweryService: BreweryService) { }

  ngOnInit(): void {
    this.sub = this.breweryService.getBreweries().subscribe({
      next: breweries => {
        this.breweries = breweries;
      },
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
