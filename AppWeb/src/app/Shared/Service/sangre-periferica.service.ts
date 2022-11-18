import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Paciente} from "../Interface/paciente";
import {SangrePeriferica} from "../Interface/sangre-periferica";

@Injectable({
  providedIn: 'root'
})
export class SangrePerifericaService {
  basePath = 'http://localhost:3000/sangrePeriferica';

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

  addSangrePeriferica(item: any): Observable<SangrePeriferica>{
    return this.http.post<SangrePeriferica>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  updateSangrePeriferica(id: number, item: any): Observable<SangrePeriferica>{
    return this.http.put<SangrePeriferica>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getAllSangrePeriferica(): Observable<SangrePeriferica>{
    return this.http.get<SangrePeriferica>(this.basePath)
      .pipe(retry(2), catchError(this.handleError));
  }

  getSangrePerifericaById(sangrePerifericaId: number): Observable<SangrePeriferica>{
    return this.http.get<SangrePeriferica>(`${this.basePath}/${sangrePerifericaId}`)
      .pipe(retry(0), catchError(this.handleError));
  }
}
