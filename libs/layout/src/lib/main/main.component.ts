import { Component, AfterViewInit, OnDestroy, Renderer2 } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'opi-main',
    templateUrl: './main.component.html',
    animations: [
        trigger('submenu', [
            state('hidden', style({
                height: '0px'
            })),
            state('visible', style({
                height: '*'
            })),
            transition('visible => hidden', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            transition('hidden => visible', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
        ])
    ]
})
export class MainComponent implements AfterViewInit, OnDestroy {

    public menuInactiveDesktop!: boolean;

    public menuActiveMobile!: boolean;

    public overlayMenuActive!: boolean;

    public staticMenuInactive = false;

    public profileActive!: boolean;

    public topMenuActive!: boolean;

    public topMenuLeaving!: boolean;

    documentClickListener!: () => void;

    menuClick!: boolean;

    topMenuButtonClick!: boolean;

    constructor(public renderer: Renderer2) { }

    ngAfterViewInit() {
        // hides the overlay menu and top menu if outside is clicked
        this.documentClickListener = this.renderer.listen('body', 'click', () => {
            if (!this.isDesktop()) {
                if (!this.menuClick) {
                    this.menuActiveMobile = false;
                }

                if (!this.topMenuButtonClick) {
                    this.hideTopMenu();
                }
            }
            else {
                if (!this.menuClick){
                    this.overlayMenuActive = false;
                }
            }

            this.menuClick = false;
            this.topMenuButtonClick = false;
        });
    }

    toggleMenu(event: Event) {
        this.menuClick = true;

        if (this.isDesktop()) {
            this.staticMenuInactive = !this.staticMenuInactive;
        }
        else {
            this.menuActiveMobile = !this.menuActiveMobile;
            this.topMenuActive = false;
        }

        event.preventDefault();
    }

    toggleProfile(event: Event) {
        this.profileActive = !this.profileActive;
        event.preventDefault();
    }

    toggleTopMenu(event: Event) {
        this.topMenuButtonClick = true;
        this.menuActiveMobile = false;

        if (this.topMenuActive) {
            this.hideTopMenu();
        } else {
            this.topMenuActive = true;
        }

        event.preventDefault();
    }

    hideTopMenu() {
        this.topMenuLeaving = true;
        setTimeout(() => {
            this.topMenuActive = false;
            this.topMenuLeaving = false;
        }, 1);
    }

    isDesktop() {
        return window.innerWidth > 992;
    }

    isMobile(){
        return window.innerWidth < 1024;
    }

    onSearchClick() {
        this.topMenuButtonClick = true;
    }

    ngOnDestroy() {
        if (this.documentClickListener) {
            this.documentClickListener();
        }
    }
}
