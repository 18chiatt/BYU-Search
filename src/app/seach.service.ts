import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, of, ReplaySubject, Subject } from "rxjs";
import { SearchResult } from "./types";

@Injectable({ providedIn: "root" })
export class SearchService {
	private searchString: string = null;
	private searchStringSubject = new ReplaySubject<string>(1);
	private designTwo:boolean = false;
	private designTwoEmitter: Subject<boolean> = new ReplaySubject<boolean>(1);

	constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {
		this.designTwoEmitter.next(false);
		route.queryParamMap.subscribe((map) => {
			if (map.get("q") !== undefined) {
				this.searchString = map.get("q");
				this.searchStringSubject.next(this.searchString);
			}
		});
	}

	public getDesignEmitter(): Subject<boolean> {
		return this.designTwoEmitter;
	}

	public setDesign(designTwo: boolean ){
		this.designTwoEmitter.next(designTwo);
	}

	public getSearchString(): Observable<string> {
		return this.searchStringSubject;
	}

	public navToSearch(val: string) {
		this.router.navigate([], { queryParams: { q: val } });
	}

	getKey(): string{
		return ('AIzaSyABRJ3HkXMGBAdy' + ",hijklmnop,"  + 'Mq2boTqheKdMorJ13J0').split(',').filter((curr, index) => index !== 1).join('')
		// please don't yoink my special string :(
	}

	getCX(): string {
		return ('ca8c3d7f' + ',lmnop,' + '40d050e3e').split(',').filter((curr, index) => index !== 1).join('')
	}

	public search(query: string): Observable<SearchResult> {
		if(!query){
			return of (null);
		}
		const params = new HttpParams().set('key', this.getKey()).set('cx', this.getCX()).set('q', query)
		return this.http.get<SearchResult>('https://www.googleapis.com/customsearch/v1', {params})
		
	}
}
