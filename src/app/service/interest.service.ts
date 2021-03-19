import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Interest } from '../model/interest';

@Injectable({
  providedIn: 'root'
})
export class InterestService {

  apiUrl: string = 'http://localhost:3000/users.interest'

  constructor(private http: HttpClient) { }

  interestList$: BehaviorSubject<Interest[]> = new BehaviorSubject<Interest[]>([]);

  getAll(): void {
    this.http.get<Interest[]>(this.apiUrl).subscribe(
      interest => this.interestList$.next(interest)
    );
  };

  get(id: number | string): Observable<Interest> {
    id = parseInt('' + id);
    return Number(id) === 0 ? of(new Interest()) : this.http.get<Interest>(`${this.apiUrl}/${id}`)
  };

  create(interest: Interest): void {
    this.http.post(this.apiUrl, interest).subscribe(
      () => this.getAll()
    );
  };

  update(interest: Interest): Observable<Interest> {
    return this.http.patch<Interest>(`${this.apiUrl}/${interest.id}`, interest).pipe(
      tap(() => this.getAll())
    )
  };

  delete(interest: Interest): Observable<Interest> {
    return this.http.delete<Interest>(`${this.apiUrl}/${interest.id}`).pipe(
      tap(() => this.getAll())
    )
  };
}
