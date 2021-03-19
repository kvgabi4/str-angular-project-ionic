import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl: string = 'http://localhost:3000/users'

  constructor(private http: HttpClient) { }

  userList$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

  getAll(): void {
    this.http.get<User[]>(this.apiUrl).subscribe(
      user => this.userList$.next(user)
    );
  };

  get(id: number | string): Observable<User> {
    id = parseInt('' + id);
    return this.http.get<User>(`${this.apiUrl}/${id}`)
    // return Number(id) === 0 ? of(new User()) : this.http.get<User>(`${this.apiUrl}/${id}`)
  };

  create(user: User): void {
    this.http.post(this.apiUrl, user).subscribe(
      () => this.getAll()
    );
  };

  update(user: User): Observable<User> {
    return this.http.patch<User>(`${this.apiUrl}/${user.id}`, user).pipe(
      tap(() => this.getAll())
    )
  };

  delete(user: User): Observable<User> {
    return this.http.delete<User>(`${this.apiUrl}/${user.id}`).pipe(
      tap(() => this.getAll())
    )
  };

  // remove(user: User): void {
  //   this.http.delete(`${this.apiUrl}/${user.id}`
  //   ).subscribe(() => this.getAll());
  // };

}
