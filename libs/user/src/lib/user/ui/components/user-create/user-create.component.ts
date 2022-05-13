import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CreateUserCommand, CreateUserCommandHandler } from '../../../application';

@Component({
  selector: 'opi-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  userForm!: FormGroup;

  constructor(
    private readonly createUserCommandHandler: CreateUserCommandHandler,
    private readonly fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', Validators.required],
    });
  }

  async onSubmit() {
    const command: CreateUserCommand = {
      firstName: this.userForm.value.firstName,
      lastName: this.userForm.value.lastName
    }
    await this.createUserCommandHandler.execute(command);
  }
}
