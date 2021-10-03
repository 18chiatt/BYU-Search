import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";
import { SearchService } from "../../seach.service";
import { Item } from "../../types";

@Component({
	selector: "app-result",
	templateUrl: "result.component.html",
	styleUrls: ["./result.component.scss"],
	encapsulation: ViewEncapsulation.None
})
export class ResultComponent implements OnInit {
	constructor(private service: SearchService) {}
	@Input() toDisplay: Item;
	designTwo:boolean = false;

	ngOnInit() {
		this.service.getDesignEmitter().subscribe(designTwo => {
			this.designTwo = designTwo
		})
	}

	visit() {
		window.location.href = this.toDisplay.htmlFormattedUrl;
	}

	link() {
		return this.toDisplay.htmlFormattedUrl;
	}

	format(str: string): string {
		return str.split('/')[0]
	}
}
