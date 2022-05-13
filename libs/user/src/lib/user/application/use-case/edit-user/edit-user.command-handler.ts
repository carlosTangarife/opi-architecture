import { Injectable } from '@angular/core';
import { Command } from '@archimedes/arch';

import { IUserRepository } from '../../repository';
import { EditUserCommand } from './edit-user.command';

@Injectable()
export class EditUserCommandHandler extends Command<EditUserCommand, void> {
  constructor(private readonly userRepository: IUserRepository) {
    super();
  }

  internalExecute(param: EditUserCommand): Promise<void> {
    const { id, ...body } = param;
    return this.userRepository.editUser(id, body);
  }
}
