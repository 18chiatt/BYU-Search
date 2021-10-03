import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SearchService } from "../seach.service";

@Component({
	selector: "top-bar",
	templateUrl: "top-bar.component.html",
	styleUrls: ["./top-bar.component.scss"],
})
export class TopBarComponent implements OnInit {
	query: string = "";
	constructor(private search: SearchService) {}

	ngOnInit() {
		this.search.getSearchString().subscribe((res) => {
			this.query = res;
		});
	}

	returnToMain() {
		window.location.href = "https://www.cs.byu.edu";
	}

	searchCurr() {
		this.search.navToSearch(this.query);
	}
}
