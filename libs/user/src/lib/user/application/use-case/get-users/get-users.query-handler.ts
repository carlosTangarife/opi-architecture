import { Injectable } from '@angular/core';
import { Query } from '@archimedes/arch';

import { UserModel } from '../../../domain/user.model';
import { IUserRepository } from '../../repository';

//@EvictCache
@Injectable()
export class GetUsersQueryHandler extends Query<Array<UserModel>> {
  constructor(private readonly userRepository: IUserRepository) {
    super();
  }

  internalExecute(): Promise<Array<UserModel>> {
    return this.userRepository.getUsers();
  }
}
