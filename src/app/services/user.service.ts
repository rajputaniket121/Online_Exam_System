import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user: Observable<User>;

  constructor(
    private router: Router,
    private http: HttpClient
    ) { 

    }

    getAll(): Observable<User[]> {
      return this.http.get<User[]>(`${baseUrl}/users`);
    }

  insertUser(data: User): Observable<User>{
    return this.http.post<User>(`${baseUrl}`,data);
  }

  getById(id: any): Observable<User>{
   return this.http.get(`${baseUrl}/${id}`);
  }

logout() {
  // remove user from local storage and set current user to null
  localStorage.removeItem('user');
  this.router.navigate(['/account/login']);
}

}
