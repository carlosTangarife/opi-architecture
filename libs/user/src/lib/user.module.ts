

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CacheInvalidations } from '@archimedes/arch';

import { PrimengModule } from './primeng.module';
import { UserRoutingModule } from './user.routing';
import {
    CreateUserCommandHandler, DeleteUserCommandHandler, EditUserCommandHandler, GetUserQueryHandler,
    GetUsersQueryHandler, IUserRepository
} from './user/application';
import { UserRepository } from './user/repository/user.repository';
import { UserCreateComponent, UserDetailsComponent, UserListComponent } from './user/ui';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
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
  }
 }
