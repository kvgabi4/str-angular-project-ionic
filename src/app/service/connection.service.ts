import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { Connection } from '../model/connection';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  apiUrl: string = 'http://localhost:3000/connections'

  constructor(private http: HttpClient) { }

  connectionList$: BehaviorSubject<Connection[]> = new BehaviorSubject<Connection[]>([]);

  getAll(): void {
    this.http.get<Connection[]>(this.apiUrl).subscribe(
      connection => this.connectionList$.next(connection)
    );
  };

  get(id: number | string): Observable<Connection> {
    id = parseInt('' + id);
    return Number(id) === 0 ? of(new Connection()) : this.http.get<Connection>(`${this.apiUrl}/${id}`)
  };

  getConnection(user1: number, user2: number): Observable<Connection[]> {
    user1 = parseInt('' + user1);
    user2 = parseInt('' + user2);
    console.log('getConnection', user1, user2)
    return this.http.get<Connection[]>(`${this.apiUrl}`).pipe(
      map(connections => connections.filter(connection => connection.user1 === user1 && connection.user2 === user2)
      )
    )
  };

  getById(userId: number): Observable<Connection[]> {
    userId = parseInt('' + userId);
    return this.http.get<Connection[]>(this.apiUrl).pipe(
      map(connections => connections.filter(connection => connection.user1 == userId))
    );
  }

  create(connection: Connection): void {
    this.http.post(this.apiUrl, connection).subscribe(
      () => this.getAll()
    );
  };

  update(connection: Connection): Observable<Connection> {
    return this.http.patch<Connection>(`${this.apiUrl}/${connection.id}`, connection).pipe(
      tap(() => this.getAll())
    )
  };

  delete(connection: Connection): Observable<Connection> {
    console.log('delete', connection)
    return this.http.delete<Connection>(`${this.apiUrl}/${connection.id}`)
  };

}
