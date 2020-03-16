import { Component, OnChanges, Input } from '@angular/core';
import { MockUserData } from '../../models/mockdata-model';

@Component({
	selector: 'app-listing-panel',
	templateUrl: './listing-panel.component.html',
	styleUrls: [ './listing-panel.component.css' ]
})
export class ListingPanelComponent implements OnChanges {
	@Input() mockUserData: MockUserData;
	private userId;
	private id;
	public title;
	public description;
	//private someUnknownVar; //to show the importance of using model

	constructor() {}

	ngOnChanges() {
		this.userId = this.mockUserData.userId;
		this.id = this.mockUserData.id;
		this.title = this.mockUserData.title;
		this.description = this.mockUserData.body;
		//this.someUnknownVar = this.mockUserData.someUnknownVar;
	}
}
