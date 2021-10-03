import { Component, OnInit } from "@angular/core";

@Component({
	selector: "role-selection",
	templateUrl: "role-selection.component.html",
	styleUrls: ["role-selection.component.scss"],
})
export class RoleSelectionComponent implements OnInit {
	constructor() {}

	readonly roles = [
		"UNDERGRADUATE",
		"GRADUATE",
		"EMPLOYMENT",
		"DEPARTMENT",
		"CLUBS",
		"PROJECTS",
	];

	ngOnInit() {}

	toMain() {
		window.location.href = "https://www.cs.byu.edu";
	}
}
