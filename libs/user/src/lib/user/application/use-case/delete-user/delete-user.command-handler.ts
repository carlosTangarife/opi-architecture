import { Injectable } from '@angular/core';
import { Command } from '@archimedes/arch';

import { IUserRepository } from '../../repository';
import { DeleteUserCommand } from './delete-user.command';

@Injectable()
export class DeleteUserCommandHandler extends Command<DeleteUserCommand, void> {
  constructor(private readonly userRepository: IUserRepository) {
    super();
  }

  internalExecute(param: DeleteUserCommand): Promise<void> {
    return this.userRepository.deleteUser(param.id);
  }
}
