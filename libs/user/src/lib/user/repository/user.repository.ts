import { Inject, Injectable } from '@angular/core';

import { IUserRepository } from '../application';
import { UserModel } from '../domain';
import { APP_CONFIG, IEnvironment } from '@opi/config';
import { HttpService } from '@opi/opi-http';

@Injectable()
export class UserRepository extends IUserRepository {

  constructor(private readonly http: HttpService, @Inject(APP_CONFIG) private readonly appConfig: IEnvironment) {
    super();
  }

  getUser(id: number): Promise<UserModel> {
    return this.http.get<UserModel>(`${this.appConfig.baseUrl}/users/${id}`);
  }

  getUsers(): Promise<Array<UserModel>> {
    return this.http.get<Array<UserModel>>(`${this.appConfig.baseUrl}/users`);
  }

  deleteUser(id: number): Promise<void> {
    return this.http.delete<void>(`${this.appConfig.baseUrl}/users/${id}`);
  }

  createUser(user: UserModel): Promise<UserModel> {
    return this.http.post<UserModel, UserModel>(`${this.appConfig.baseUrl}/users`, user);
  }

  editUser(id: number, user: UserModel): Promise<void> {
    return this.http.put<UserModel, void>(`${this.appConfig.baseUrl}/users/${id}`, user);
  }

}
