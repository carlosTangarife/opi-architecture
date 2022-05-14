import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

import { DeleteUserCommand, DeleteUserCommandHandler, GetUsersQueryHandler } from '../../../application';
import { UserModel } from '../../../domain/user.model';

@Component({
  selector: 'opi-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  providers:[MessageService, ConfirmationService]
})
export class UserListComponent implements OnInit {
  productDialog!: boolean;

  products!: UserModel[];

  selectedProducts!: UserModel[];

  submitted!: boolean;

  constructor(
    private readonly getUsersQueryHandler: GetUsersQueryHandler,
    private readonly deleteUserCommandHandler: DeleteUserCommandHandler,
    private readonly messageService: MessageService,
    private readonly confirmationService: ConfirmationService,
    private readonly router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    await this.loadUsers();
  }

  async loadUsers(): Promise<void> {
    this.products = await this.getUsersQueryHandler.execute();
  }

  createProduct(): void {
    this.router.navigate(["user", "create"]);
  }

  editProduct(product: UserModel) {
    this.router.navigate(["user", "edit", product.id]);
  }

  deleteProduct(product: UserModel) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + product.firstName + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: async () => {
        const command: DeleteUserCommand = {
          id: product.id || 0
        };
        await this.deleteUserCommandHandler.execute(command);
        await this.loadUsers();
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Product Deleted',
          life: 3000,
        });
      },
    });
  }
}
