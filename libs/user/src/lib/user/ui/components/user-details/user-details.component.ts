import { Component, OnInit } from '@angular/core';

import { GetUserQuery, GetUserQueryHandler } from '../../../application';
import { UserModel } from '../../../domain';

@Component({
  selector: 'opi-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user$!: Promise<UserModel>;

  constructor(private readonly getUserQueryHandler: GetUserQueryHandler) { }

  ngOnInit(): void {
    const query: GetUserQuery = { id: 1 }
    this.user$ = this.getUserQueryHandler.execute(query);
  }

}
