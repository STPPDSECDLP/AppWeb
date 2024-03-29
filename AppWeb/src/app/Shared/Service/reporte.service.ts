import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {SangrePeriferica} from "../Interface/sangre-periferica";
import {Reporte} from "../Interface/reporte";

@Injectable({
  providedIn: 'root'
})
export class ReporteService {
  basePath = 'https://e7zitnrcak.execute-api.us-east-1.amazonaws.com/dev/reporte';

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

  getAllReportes(): Observable<Reporte>{
    return this.http.get<Reporte>(this.basePath)
      .pipe(retry(2), catchError(this.handleError));
  }

  getReporteById(reporteId: number): Observable<Reporte>{
    return this.http.get<Reporte>(`${this.basePath}?id=${reporteId}`)
      .pipe(retry(0), catchError(this.handleError));
  }
  
  addReporte(item: any): Observable<Reporte>{
    return this.http.post<Reporte>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  updateReporte(item: any): Observable<Reporte>{
    return this.http.put<Reporte>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

}
