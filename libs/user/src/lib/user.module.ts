

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CacheInvalidations } from '@archimedes/arch';

import { UserRoutingModule } from './user.routing';
import {
    CreateUserCommandHandler, DeleteUserCommandHandler, EditUserCommandHandler, GetUserQueryHandler,
    GetUsersQueryHandler, IUserRepository
} from './user/application';
import { UserRepository } from './user/repository';
import { UserCreateComponent, UserDetailsComponent, UserListComponent } from './user/ui';
import { PrimengModule } from './primeng.module';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
	PrimengModule
  ],
  declarations: [UserCreateComponent, UserDetailsComponent, UserListComponent],
  providers: [
    CreateUserCommandHandler,
    DeleteUserCommandHandler,
    EditUserCommandHandler,
    GetUserQueryHandler,
    GetUsersQueryHandler,
    { provide: IUserRepository, useClass: UserRepository }
  ]
})
export class UserModule {
  constructor() {
    CacheInvalidations.set(CreateUserCommandHandler.name, [GetUsersQueryHandler.name])
    CacheInvalidations.set(DeleteUserCommandHandler.name, [GetUsersQueryHandler.name])
  }
 }
