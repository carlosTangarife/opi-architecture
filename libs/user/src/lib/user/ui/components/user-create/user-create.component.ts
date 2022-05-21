import { Component, OnInit } from '@angular/core';
import {
	AbstractControl,
	FormBuilder,
	FormGroup,
	Validators,
} from '@angular/forms';

import {
	CreateUserCommand,
	CreateUserCommandHandler,
	GetUserQuery,
	GetUserQueryHandler,
} from '../../../application';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from '../../../domain';

@Component({
	selector: 'opi-user-create',
	templateUrl: './user-create.component.html',
	styleUrls: ['./user-create.component.scss'],
})
export class UserCreateComponent implements OnInit {
	userForm!: FormGroup;

	constructor(
		private readonly createUserCommandHandler: CreateUserCommandHandler,
		private readonly getUserQueryHandler: GetUserQueryHandler,
		private readonly fb: FormBuilder,
		private readonly router: Router,
		private readonly route: ActivatedRoute
	) {}

	async ngOnInit(): Promise<void> {
		const id = Number(this.route.snapshot.paramMap.get('id'));
		let user = undefined;
		if (id !== 0) {
			const query: GetUserQuery = { id };
			user = await this.getUserQueryHandler.execute(query);
		}
		this.buildForm(user);
	}

	buildForm(user?: UserModel): void {
		this.userForm = this.fb.group({
			firstName: [user?.firstName || '', [Validators.required]],
			lastName: [user?.lastName || '', Validators.required],
		});
	}

	async onSubmit() {
		const command: CreateUserCommand = {
			firstName: this.userForm.value.firstName,
			lastName: this.userForm.value.lastName,
		};
		await this.createUserCommandHandler.execute(command);
		this.router.navigate(['app', 'user']);
	}

	get firstName(): AbstractControl | null {
		return this.userForm?.get('firstName');
	}

	get lastName(): AbstractControl | null {
		return this.userForm?.get('lastName');
	}
}
