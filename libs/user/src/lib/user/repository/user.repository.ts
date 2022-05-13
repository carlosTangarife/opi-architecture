import { lastValueFrom } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IUserRepository } from '../application';
import { UserModel } from '../domain';

@Injectable()
export class UserRepository extends IUserRepository {

  baseUrl = 'http://localhost:3000';

  constructor(private readonly http: HttpClient) {
    super();
  }

  getUser(id: number): Promise<UserModel> {
    const response$ = this.http.get<UserModel>(`${this.baseUrl}/users/${id}`);
    return lastValueFrom(response$);
  }

  getUsers(): Promise<Array<UserModel>> {
    const response$ = this.http.get<Array<UserModel>>(`${this.baseUrl}/users`);
    return lastValueFrom(response$);
  }

  deleteUser(id: number): Promise<void> {
    const response$ = this.http.delete<void>(`${this.baseUrl}/users/${id}`);
    return lastValueFrom(response$);
  }

  createUser(user: UserModel): Promise<UserModel> {
    const response$ = this.http.post<UserModel>(`${this.baseUrl}/users`, user);
    return lastValueFrom(response$);
  }

  editUser(id: number, user: UserModel): Promise<void> {
    const response$ = this.http.put<void>(`${this.baseUrl}/users/${id}`, user);
    return lastValueFrom(response$);
  }

}
