import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  // all: Observable<any>;
  // itemsCollection: AngularFirestoreCollection<any>;

  // constructor(
  //   private firestore: AngularFirestore
  // ) {
  //   this.itemsCollection = this.firestore.collection('users')
  //   this.all = this.itemsCollection.valueChanges({
  //     idField: 'docID'
  //   })
  // }

  // get(id: number): Observable<any> {
  //   return this.itemsCollection.doc(id.toString()).valueChanges({
  //     idField: 'id'
  //   });
  // }


  // create(doc: any): Promise<any> {
  //   return this.itemsCollection.add({...doc});
  // }

  // update(doc: any): Promise<any> {
  //   const id = doc.docID;
  //   delete doc.docID;
  //   return this.itemsCollection.doc(id).update({...doc});
  // }

  // delete(doc: any): Promise<any> {
  //   return this.itemsCollection.doc(doc.docID).delete();
  // }



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

  remove(user: User): void {
    this.http.delete(`${this.apiUrl}/${user.id}`
    ).subscribe(() => this.getAll());
  };

}
