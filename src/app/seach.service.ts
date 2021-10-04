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

	pendingSearch: string = ''

	public setPendingSearch(val: string) {
		this.pendingSearch = val;
	}

	public getPendingSearch(): string {
		return this.pendingSearch;
	}

	public navToSearch(val: string) {
		const existing = {...this.route.snapshot.queryParams};
		existing['q'] = val;
		this.router.navigate([], { queryParams: existing });
	}

	getKey(): string{
		return ('AIzaSyABRJ3HkXMGBAdy' + ",hijklmnop,"  + 'Mq2boTqheKdMorJ13J0').split(',').filter((curr, index) => index !== 1).join('')
		// please don't yoink my special string :(
	}

	getCX(): string {
		return ('ca8c3d7f' + ',lmnop,' + '40d050e3e').split(',').filter((curr, index) => index !== 1).join('')
	}

	public static readonly formatters: Map<string, (string: string)=> string>  = {
		'ed': (val) => `before:${val}`,
		'sd': (val) => `after:${val}`,
		'p': (val) => 'professor',
		'c': (val) => 'course',
		'e': (val) => 'event',
		's': (val) => 'scholarship',
		'j': (val)=> 'job'

	} as any;

	public search(query: string): Observable<SearchResult> {
		const sections: string[] = [query];
		const paramMap = this.route.snapshot.queryParamMap;
		console.log(SearchService.formatters)
		for(const key in SearchService.formatters) {
			console.log(key,"abc")
			if(paramMap.get(key) !== null){
				const val = paramMap.get(key);
				sections.push(SearchService.formatters[key](val));
			}
		}
		const fullQuery = sections.join(' ');

		if(!query){
			return of (null);
		}

		const params = new HttpParams().set('key', this.getKey()).set('cx', this.getCX()).set('q', fullQuery)
		return this.http.get<SearchResult>('https://www.googleapis.com/customsearch/v1', {params})
		
	}
}
