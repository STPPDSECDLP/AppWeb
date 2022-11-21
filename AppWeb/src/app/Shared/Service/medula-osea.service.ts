import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {MedulaOsea} from "../Interface/medula-osea";

@Injectable({
  providedIn: 'root'
})
export class MedulaOseaService {
  basePath = 'http://localhost:3000/medulaOsea';

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

  addMedulaOsea(item: any): Observable<MedulaOsea>{
    return this.http.post<MedulaOsea>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  updateMedulaOsea(id: number, item: any): Observable<MedulaOsea>{
    return this.http.put<MedulaOsea>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getAllMedulaOsea(): Observable<MedulaOsea>{
    return this.http.get<MedulaOsea>(this.basePath)
      .pipe(retry(2), catchError(this.handleError));
  }

  getMedulaOseaById(sangrePerifericaId: number): Observable<MedulaOsea>{
    return this.http.get<MedulaOsea>(`${this.basePath}/${sangrePerifericaId}`)
      .pipe(retry(0), catchError(this.handleError));
  }
}
