import { Injectable } from '@angular/core';
import { EvictCache, Query } from '@archimedes/arch';

import { UserModel } from '../../../domain/user.model';
import { IUserRepository } from '../../repository';
import { GetUserQuery } from './get-user.query';

@EvictCache
@Injectable()
export class GetUserQueryHandler extends Query<UserModel, GetUserQuery> {
  constructor(private readonly userRepository: IUserRepository) {
    super();
  }

  internalExecute(param: GetUserQuery): Promise<UserModel> {
    return this.userRepository.getUser(param.id);
  }

}
