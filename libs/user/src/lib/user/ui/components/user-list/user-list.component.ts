import { Component, OnInit } from '@angular/core';

import { GetUsersQueryHandler } from '../../../application';
import { UserModel } from '../../../domain/user.model';

@Component({
  selector: 'opi-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users$!: Promise<Array<UserModel>>;

  constructor(private readonly getUsersQueryHandler: GetUsersQueryHandler) {
  }

  ngOnInit(): void {
    this.users$ = this.getUsersQueryHandler.execute();
  }

}
