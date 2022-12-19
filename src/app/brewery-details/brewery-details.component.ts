import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IBrewery } from '../../models/brewery';
import { BreweryService } from "../../services/brewery.service"

@Component({
  selector: 'cb-brewery-details',
  templateUrl: './brewery-details.component.html',
  styleUrls: ['./brewery-details.component.css']
})
export class BreweryDetailsComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Brewery Detail';
  brewery: IBrewery | undefined;
  sub!: Subscription;
  errorMessage: string = '';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private breweryService: BreweryService) { }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id}`;
    this.sub = this.breweryService.getBrewery(id).subscribe({
      next: brewery => {
        this.brewery = brewery;
      },
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/philybreweries']);
  }
  
  ngOnDestroy(): void {
      this.sub.unsubscribe();
  }
}

