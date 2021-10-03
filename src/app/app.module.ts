import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatIconModule } from "@angular/material/icon";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { RoleSelectionComponent } from "./role-selection/role-selection.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SearchComponent } from "./search-results/search-results.component";
import { MatInputModule } from "@angular/material/input";
import { ResultsComponent } from "./results/results.component";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { ResultComponent } from "./results/result/result.component";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
	declarations: [
		AppComponent,
		TopBarComponent,
		RoleSelectionComponent,
		SearchComponent,
		ResultsComponent,
		ResultComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatIconModule,
		MatFormFieldModule,
		FormsModule,
		MatInputModule,
		ReactiveFormsModule,
		MatProgressSpinnerModule,
		MatTooltipModule,
		MatSlideToggleModule,
		MatPaginatorModule
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
