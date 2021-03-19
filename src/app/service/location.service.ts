import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Location } from '../model/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  apiUrl: string = 'http://localhost:3000/users.location'

  constructor(private http: HttpClient) { }

  locationList$: BehaviorSubject<Location[]> = new BehaviorSubject<Location[]>([]);

  getAll(): void {
    this.http.get<Location[]>(this.apiUrl).subscribe(
      location => this.locationList$.next(location)
    );
  };

  get(id: number | string): Observable<Location> {
    id = parseInt('' + id);
    return Number(id) === 0 ? of(new Location()) : this.http.get<Location>(`${this.apiUrl}/${id}`)
  };

  create(location: Location): void {
    this.http.post(this.apiUrl, location).subscribe(
      () => this.getAll()
    );
  };

  update(location: Location): Observable<Location> {
    return this.http.patch<Location>(`${this.apiUrl}/${location.id}`, location).pipe(
      tap(() => this.getAll())
    )
  };

  delete(location: Location): Observable<Location> {
    return this.http.delete<Location>(`${this.apiUrl}/${location.id}`).pipe(
      tap(() => this.getAll())
    )
  };
}
