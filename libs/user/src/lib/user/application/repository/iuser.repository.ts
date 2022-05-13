import { UserModel } from '../../domain';

export abstract class IUserRepository {
  abstract getUser(id: number): Promise<UserModel>;

  abstract getUsers(): Promise<Array<UserModel>>;

  abstract deleteUser(id: number): Promise<void>;

  abstract createUser(user: UserModel): Promise<UserModel>;

  abstract editUser(id: number, user: UserModel): Promise<void>;
}
