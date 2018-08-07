import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { INotifyItem } from 'h21-be-ui-kit';
import { PermissionService } from 'h21-be-ui-kit';
import { H21SidebarComponent } from 'h21-be-ui-kit';
import { H21TopToolbarComponent } from 'h21-be-ui-kit';
import { H21RightOverlayPanelService } from 'h21-be-ui-kit';
import { AuthData } from '../../dto/auth-data';
import { Router } from "@angular/router";
import { H21ProfileUserLinksService } from './../profile/h21-profile-user-links/h21-profile-user-links.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  viewProviders: [MatIconRegistry],
})
export class AppComponent {
	@ViewChild(H21SidebarComponent) private sidebar: H21SidebarComponent;
	@ViewChild(H21TopToolbarComponent) private toolbar: H21TopToolbarComponent;
	title = 'prototype';
	username: string;
	private permissionService: PermissionService;

	constructor(
		iconReg: MatIconRegistry,
		sanitizer: DomSanitizer,
		private http: HttpClient,
		private router: Router,
		permissionService: PermissionService,
		private rightPanelDialog: H21RightOverlayPanelService,
		private _profileUserLinks: H21ProfileUserLinksService
	) {
		this.permissionService = permissionService;
		if(this.permissionService.isAuth()) {
			this.username = this.permissionService.getUsername();
		}
		iconReg.addSvgIcon('logo', sanitizer.bypassSecurityTrustResourceUrl('./assets/img/horse21-logo.svg'));
		iconReg.addSvgIcon('h21_baggage', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/h21-baggage-blue.svg'));
		iconReg.addSvgIcon('h21_no_baggage', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/h21-no-baggage-gray.svg'));
		iconReg.addSvgIcon('h21_luggage', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/h21-luggage-blue.svg'));
		iconReg.addSvgIcon('h21_no_luggage', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/h21-no-luggage-gray.svg'));
		iconReg.addSvgIcon('h21_night', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/h21-night-blue.svg'));
	}

	prototypeAuth(data: any): void {
		var authData: AuthData = <AuthData> {
			name: data.name,
			roles: data.roles,
			claims: data.claims
		};
		localStorage.setItem("authData", JSON.stringify(authData));
		location.reload();
	}

	logout(): void {
		localStorage.setItem("authData", null);
		location.reload();
	}

	getNotifyList(): INotifyItem[] {
		return [
			<INotifyItem>{text: 'First notification'},
			<INotifyItem>{text: 'Second notification'}
		];
	}

	showSidebar(): void {
		this.sidebar.visibilityToggle();
	}

	openHelpSection(): void {
		this.rightPanelDialog.open('h21-help');
	}

	isDemo(): boolean {
		return this.router.url.indexOf('/demo') == 0;
	}

	testLinks(): void {
		this._profileUserLinks.open();
	}
}
