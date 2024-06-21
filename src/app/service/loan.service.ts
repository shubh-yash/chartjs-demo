import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Loan } from '../model/loan.model';

@Injectable({
  providedIn: 'root',
})
export class LoanService {
  url = 'http://localhost:3000/loan';

  constructor(private http: HttpClient) {}

  getLoanInfo(): Observable<Loan[]> {
    return this.http.get<Loan[]>(this.url);
  }
}
