import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apostador } from './apostador';

@Injectable({
  providedIn: 'root'
})
export class ApostadorService {

  private backUrl: string = "http://localhost:5000/apostador"

  constructor(private http: HttpClient) { }

  getApostadores(): Observable<Apostador[]> {
    return this.http.get<Apostador[]>(`${this.backUrl}`)
  }

  crearApostador(apostador: Apostador): Observable<Apostador> {
    const headers = new HttpHeaders({ })
    return this.http.post<Apostador>(`${this.backUrl}`, apostador, { headers: headers })
  }
}
