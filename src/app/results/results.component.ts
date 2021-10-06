import { Component, OnInit } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { SearchService } from "../seach.service";
import { SearchResult } from "../types";

@Component({
	selector: "app-results",
	templateUrl: "results.component.html",
	styleUrls: ["./results.component.scss"],
})
export class ResultsComponent implements OnInit {
	constructor(private search: SearchService) {}
	loaded: boolean = false;
	result: SearchResult = null;

	readonly defaultPageSize = 10;

	itemsToDisplay: any[] = [];
	designTwo :boolean = false;

	ngOnInit() {
		this.search.getSearchString().subscribe((res) => {
			this.search.search(res).subscribe((result) => {
				if(!result){
					return;
				}
				this.loaded = true;
				this.result = result;
				this.itemsToDisplay = this.result.items?.slice(0,this.defaultPageSize) || []
			});
		});

	}

	handlePage(event: PageEvent) {
		const index = event.pageIndex;
		const startIndex = index * event.pageSize;
		const endIndex = startIndex + event.pageSize;
		this.itemsToDisplay = this.result.items.slice(startIndex,endIndex)
	}


}
