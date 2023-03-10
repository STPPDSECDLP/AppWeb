import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Paciente} from "../Interface/paciente";
import {Medico} from "../Interface/medico";

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  basePath = 'https://e7zitnrcak.execute-api.us-east-1.amazonaws.com/dev/paciente';

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

  getAllPaciente(): Observable<Paciente>{
    return this.http.get<Paciente>(this.basePath)
      .pipe(retry(2), catchError(this.handleError));
  }

  addPaciente(item: any): Observable<Paciente>{
    return this.http.post<Paciente>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getPacienteById(pacienteId: number): Observable<Paciente>{
    return this.http.get<Paciente>(`${this.basePath}?id=${pacienteId}`)
      .pipe(retry(0), catchError(this.handleError));
  }

}
