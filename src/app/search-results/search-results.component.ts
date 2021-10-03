import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormBuilder, FormControl } from "@angular/forms";
import { SearchService } from "../seach.service";

@Component({
	selector: "search-results",
	templateUrl: "search-results.component.html",
	styleUrls: ["./search-results.component.scss"],
	encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {
	constructor(private search: SearchService) {}
	public myControl: FormControl = new FormControl("");
	public designTwo: boolean = false;
	ngOnInit() {
		this.search.getSearchString().subscribe((newQuery) => {
			this.myControl.setValue(newQuery);
		});
	}

	newSearch() {
		this.search.navToSearch(this.myControl.value);
	}

	update() {
		this.designTwo = !this.designTwo;
		this.search.setDesign(this.designTwo)
	}
}
