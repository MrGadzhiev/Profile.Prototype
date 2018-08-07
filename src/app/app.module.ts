import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NouisliderModule} from 'ng2-nouislider';
import {ProfilePermissionService} from './services/profile-permission.service';
import {ProfileVocabularyService} from './services/profile-vocabulary.service';
import {
	AppSubscriberService,
	H21HeaderModule,
	H21RightOverlayPanelService,
	H21SidebarModule,
	H21TopToolbarModule,
	OrderService,
	PermissionService,
	VocabularyService
} from 'h21-be-ui-kit';
import {MatInputModule, MatNativeDateModule} from '@angular/material';
import {AppComponent} from './components/app/app.component';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppMaterialModule} from './modules/app-material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {H21ProfileUserCardComponent} from './components/profile/h21-profile-user-card/h21-profile-user-card.component';
import {ProfileUserCardDemoComponent} from './components/demo/profile-user-card-demo/profile-user-card-demo.component';
import {DemoComponent} from './components/demo/demo/demo.component';
import {DashboardComponent} from './components/demo/dashboard/dashboard.component';
import {ChartsModule} from 'ng2-charts';
import {UserProfileComponent} from "./components/profile/userProfile/user-profile/user-profile.component";
import {UserProfileListComponent} from './components/profile/userProfile/user-profile-list/user-profile-list.component';
import {H21ProfileUserLinksComponent} from './components/profile/h21-profile-user-links/h21-profile-user-links.component';
import {H21ProfileUserLinksService} from './components/profile/h21-profile-user-links/h21-profile-user-links.service';

const routes: Routes = [
	{path: '', redirectTo: 'dashboard', pathMatch: 'full'},
	{path: 'demo', component: DemoComponent},
	{path: 'demo/profileusercard', component: ProfileUserCardDemoComponent},
	{path: 'dashboard', component: DashboardComponent},
	{path: 'userProfile/:id', component: UserProfileComponent},
	{path: 'users', component: UserProfileListComponent},
	{path: '**', redirectTo: 'dashboard'}
];

@NgModule({
		declarations: [
			AppComponent,
			H21ProfileUserCardComponent,
			ProfileUserCardDemoComponent,
			DemoComponent,
			UserProfileComponent,
			DashboardComponent,
			UserProfileListComponent,
			H21ProfileUserLinksComponent,
		],
		imports: [
			BrowserModule,
			RouterModule.forRoot(routes),
			BrowserAnimationsModule,
			AppMaterialModule,
			ReactiveFormsModule,
			FormsModule,
			HttpClientModule,
			MatInputModule,
			MatNativeDateModule,
			NouisliderModule,
			H21HeaderModule,
			H21SidebarModule,
			H21TopToolbarModule,
			ChartsModule
		],
		providers: [
			{
				provide: PermissionService,
				useClass: ProfilePermissionService
			},
			{
				provide: VocabularyService,
				useClass: ProfileVocabularyService
			},
			H21RightOverlayPanelService,
			H21ProfileUserLinksService,
			AppSubscriberService,
			OrderService
		],
		bootstrap: [AppComponent],
		entryComponents: [
			H21ProfileUserLinksComponent
		]
	}
)
export class AppModule {

}
