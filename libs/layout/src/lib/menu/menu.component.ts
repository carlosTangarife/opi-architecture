import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'opi-menu',
    templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
    model!: any[];

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    {
                        label: 'Dashboard',
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/'],
                    },
                ],
            },
            {
                label: 'UI Components',
                items: [
                    {
                        label: 'Form Layout',
                        icon: 'pi pi-fw pi-id-card',
                        routerLink: ['/uikit/formlayout'],
                    },
                    {
                        label: 'Input',
                        icon: 'pi pi-fw pi-check-square',
                        routerLink: ['/uikit/input'],
                    },
                    {
                        label: 'Float Label',
                        icon: 'pi pi-fw pi-bookmark',
                        routerLink: ['/uikit/floatlabel'],
                    },
                    {
                        label: 'Button',
                        icon: 'pi pi-fw pi-mobile',
                        routerLink: ['/uikit/button'],
                        class: 'rotated-icon',
                    },
                    {
                        label: 'File',
                        icon: 'pi pi-fw pi-file',
                        routerLink: ['/uikit/file'],
                    }
                ],
            },
            {
                label: 'Pages',
                items: [
                    {
                        label: 'Login',
                        icon: 'pi pi-fw pi-sign-in',
                        routerLink: ['pages/login'],
                    },
                    {
                        label: 'Error',
                        icon: 'pi pi-fw pi-times-circle',
                        routerLink: ['pages/error'],
                    },
                    {
                        label: 'Not Found',
                        icon: 'pi pi-fw pi-exclamation-circle',
                        routerLink: ['pages/notfound'],
                    },
                    {
                        label: 'Access Denied',
                        icon: 'pi pi-fw pi-lock',
                        routerLink: ['pages/access'],
                    },
                    {
                        label: 'Empty',
                        icon: 'pi pi-fw pi-circle',
                        routerLink: ['/pages/empty'],
                    },
                ],
            },
            {
                label: 'Hierarchy',
                items: [
                    {
                        label: 'Submenu 1',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Submenu 1.1',
                                icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    {
                                        label: 'Submenu 1.1.1',
                                        icon: 'pi pi-fw pi-bookmark',
                                    },
                                    {
                                        label: 'Submenu 1.1.2',
                                        icon: 'pi pi-fw pi-bookmark',
                                    },
                                    {
                                        label: 'Submenu 1.1.3',
                                        icon: 'pi pi-fw pi-bookmark',
                                    },
                                ],
                            },
                            {
                                label: 'Submenu 1.2',
                                icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    {
                                        label: 'Submenu 1.2.1',
                                        icon: 'pi pi-fw pi-bookmark',
                                    },
                                ],
                            },
                        ],
                    }
                ],
            }
        ];
    }

    onKeydown(event: KeyboardEvent) {
        const nodeElement = <HTMLDivElement>event.target;
        if (event.code === 'Enter' || event.code === 'Space') {
            nodeElement.click();
            event.preventDefault();
        }
    }
}
