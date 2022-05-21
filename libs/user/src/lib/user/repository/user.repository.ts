import { lastValueFrom } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { IUserRepository } from '../application';
import { UserModel } from '../domain';
import { APP_CONFIG, IEnvironment } from '@opi/config';

@Injectable()
export class UserRepository extends IUserRepository {

  constructor(private readonly http: HttpClient, @Inject(APP_CONFIG) private readonly appConfig: IEnvironment) {
    super();
  }

  getUser(id: number): Promise<UserModel> {
    const response$ = this.http.get<UserModel>(`${this.appConfig.baseUrl}/users/${id}`);
    return lastValueFrom(response$);
  }

  getUsers(): Promise<Array<UserModel>> {
    const response$ = this.http.get<Array<UserModel>>(`${this.appConfig.baseUrl}/users`);
    return lastValueFrom(response$);
  }

  deleteUser(id: number): Promise<void> {
    const response$ = this.http.delete<void>(`${this.appConfig.baseUrl}/users/${id}`);
    return lastValueFrom(response$);
  }

  createUser(user: UserModel): Promise<UserModel> {
    const response$ = this.http.post<UserModel>(`${this.appConfig.baseUrl}/users`, user);
    return lastValueFrom(response$);
  }

  editUser(id: number, user: UserModel): Promise<void> {
    const response$ = this.http.put<void>(`${this.appConfig.baseUrl}/users/${id}`, user);
    return lastValueFrom(response$);
  }

}
