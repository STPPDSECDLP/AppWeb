import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EstadisticasService {
  basePath = 'https://e7zitnrcak.execute-api.us-east-1.amazonaws.com/dev/estadisticas';

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

  getSexoEstadisticas(): Observable<any>{
    return this.http.get<any>(this.basePath)
      .pipe(retry(2), catchError(this.handleError));
  }

  getEdadEstadisticas(): Observable<any>{
    return this.http.get<any>(`${this.basePath}?id=edad`)
      .pipe(retry(2), catchError(this.handleError));
  }
}