import { Injectable } from '@angular/core';
import { Command } from '@archimedes/arch';

import { UserModel } from '../../../domain';
import { IUserRepository } from '../../repository';
import { CreateUserCommand } from './create-user.command';

@Injectable()
export class CreateUserCommandHandler extends Command<CreateUserCommand, UserModel> {
  constructor(private readonly userRepository: IUserRepository) {
    super();
  }

  internalExecute(param: CreateUserCommand): Promise<UserModel> {
    const model: UserModel = {
      firstName: param.firstName,
      lastName: param.lastName
    }

    return this.userRepository.createUser(model);
  }
}
