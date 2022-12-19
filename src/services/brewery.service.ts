import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, tap, throwError } from "rxjs";

import { IBrewery } from "../models/brewery";

@Injectable({
  providedIn: 'root'
})
export class BreweryService {
  private breweriesUrl = 'https://api.openbrewerydb.org/breweries';
  //private breweriesUrl = "https://localhost:7048/api/breweries";

  constructor(private http: HttpClient) { }


  getBreweries(): Observable<IBrewery[]> {
    return this.http.get<IBrewery[]>(this.breweriesUrl).pipe(
      tap(data => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getBrewery(id: string): Observable<IBrewery> {
    return this.http.get<IBrewery>(this.breweriesUrl + '/' + id).pipe(
      tap(data => console.log(id, JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
