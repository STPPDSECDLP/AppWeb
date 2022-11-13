import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Medico} from "../Interface/medico";

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  basePath = 'http://localhost:3000/medico';

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
  constructor(private http: HttpClient) { }
  handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.log('An error occurred: ', error.error.message);
    }
    else {
      console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something happened with request, please try again later.');
  }

  getMedicoById(medicoId: number): Observable<Medico>{
    return this.http.get<Medico>(`${this.basePath}/${medicoId}`)
      .pipe(retry(0), catchError(this.handleError));
  }
}
