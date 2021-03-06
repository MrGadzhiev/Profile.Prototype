import {Component, Input, OnInit} from '@angular/core';
import {IHistory} from "../../../../dto/i-history";
import {H21Validator} from "h21-be-ui-kit";
import {History} from "../../h21-profile-user-card/h21-profile-user-card.component";
import {FakeHttpClientService} from "../../../../services/fake-http-client.service";
import {IUserLink} from "../../../../dto/i-user-link";
import {ProfileVocabularyService} from "../../../../services/profile-vocabulary.service";
import {H21ProfileUserLinksService} from "../../h21-profile-user-links/h21-profile-user-links.service";
import {IAgentProfileDto} from "../../../../dto/profile/i-agent-profile-dto";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-agent-profile',
  templateUrl: './agent-profile.component.html',
  styleUrls: ['./agent-profile.component.css']
})
export class AgentProfileComponent implements OnInit {

	/** The agent */
	@Input() entity: IAgentProfileDto = {};
	/** Editable mode option */
	@Input() editable: boolean = true;

	entityId: number;
	actionInProgress = false;

	validator = new H21Validator();

	historyDisplayedColumns: string[] = ['expand', 'date', 'action', 'user'];
	historyExpandDisplayedColumns: string[] = ['blank', 'field', 'oldValue', 'newValue'];
	historyData: IHistory[];
	linksDisplayedColumns: string [] = ['agency', 'branch', 'role', 'actions'];
	linksData: IUserLink[];

	/** Expanded row element */
	historyExpandedElement: History;

	constructor(protected httpClient: FakeHttpClientService,
				protected activatedRoute: ActivatedRoute,
				protected vocabulary: ProfileVocabularyService,
				protected profileUserLinks: H21ProfileUserLinksService) {

		this.setValidator();

		this.setReferences();
	}

	setValidator(){
		this.validator.register(
			'entity.name',
			() => {
				return !!this.entity && !!this.entity.name
			},
			'Name cannot be empty'
		);

		this.validator.register(
			'entity.code',
			() => {
				return !!this.entity && !!this.entity.code
			},
			'Code cannot be empty'
		);

		this.validator.register(
			'entity.title',
			() => {
				return !!this.entity && !!this.entity.title
			},
			'Title cannot be empty'
		);
	}

	setReferences() {
		this.historyData = this.httpClient.getHistory();
		this.linksData = this.httpClient.getUserLink();
	}

	cancel() {

	}

	save() {

	}

	removeFolderRow(id: number): void {

	}

	addNewFolderRow() {

	}

	addLink() {
		this.profileUserLinks.open();
	}

	viewLink(id: number): void {

	}

	editLink(id: number): void {

	}

	ngAfterContentChecked(): void {
	}

	ngOnInit(): void {
		this.activatedRoute.params.subscribe(params => {
			this.entityId = +params['id'];
			this.actionInProgress = true;
			this.httpClient.getAgentProfile(this.entityId)
				.subscribe(entity => {
						this.entity = entity;
					},
					error => {
						console.log(error);
					});
		});
	}
}
