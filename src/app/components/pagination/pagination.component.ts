import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
	selector: 'app-pagination',
	templateUrl: './pagination.component.html',
	styleUrls: [ './pagination.component.css' ]
})
export class PaginationComponent implements OnInit, OnChanges {
	public allPages = new Array();

	@Input() private numTotalRecords: number;
	@Input() private numRecordsPerPage: number;
	@Output() public pageChange = new EventEmitter();
	public currentPage = 0;
	private numTotalPages;

	constructor() {}

	ngOnInit() {}

	ngOnChanges() {
		this.numTotalPages = Math.ceil(this.numTotalRecords / this.numRecordsPerPage);
		this.allPages = Array.from(Array(this.numTotalPages).keys());
	}

	onPageChange(pageNum) {
		this.currentPage = pageNum;
		this.pageChange.emit(this.currentPage);
	}

	gotoNextPage() {
		if (this.currentPage < this.numTotalPages - 1) this.onPageChange(this.currentPage + 1);
	}

	gotoPreviousPage() {
		if (this.currentPage > 0) this.onPageChange(this.currentPage - 1);
	}
}
