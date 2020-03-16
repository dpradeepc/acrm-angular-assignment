import { Component, OnInit, OnDestroy } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { MockData } from '../../models/mockdata-model';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: [ './list.component.css' ]
})
export class ListComponent implements OnInit, OnDestroy {
	public numTotalRecords = 75;
	public numRecordsPerPage = 10;
	public title = 'assignment';
	public mockData: MockData;
	public subscription: Subscription;
	private cachedRecords = [];

	ngOnInit() {}

	constructor(private backendService: BackendService) {
		this.getMockData();
	}

	onPageChange(pageNum: number) {
		let startIndex = pageNum * this.numRecordsPerPage;
		this.getMockData(startIndex);
	}

	getMockData(startIndex = 0) {
		//not an elegant or a proper way to implement here, this should be a part of pagination service
		let numRecordsToFetch;
		let numRecordsRemaining = this.numTotalRecords - startIndex;
		if (numRecordsRemaining < this.numRecordsPerPage) {
			numRecordsToFetch = numRecordsRemaining;
		} else {
			numRecordsToFetch = this.numRecordsPerPage;
		}

		let queryString = `_start=${startIndex}&_limit=${numRecordsToFetch}`;
		this.subscription = this.backendService.get(queryString).subscribe((mockData: MockData) => {
			this.mockData = mockData;
		});
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
