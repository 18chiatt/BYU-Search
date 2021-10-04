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
import { HttpClientModule } from "@angular/common/http";
import { AdvancedSearchComponent } from "./advanced-search/advanced-search.component";
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from "@angular/material/button";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";






@NgModule({
	declarations: [
		AppComponent,
		TopBarComponent,
		RoleSelectionComponent,
		SearchComponent,
		ResultsComponent,
		ResultComponent,
		AdvancedSearchComponent
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
		MatPaginatorModule,
		HttpClientModule,
		MatMenuModule,
		MatCheckboxModule,
		MatButtonModule,
		MatDatepickerModule,
		MatNativeDateModule
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
