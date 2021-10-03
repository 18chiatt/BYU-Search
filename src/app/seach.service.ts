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

	constructor(private route: ActivatedRoute, private router: Router) {
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

	public search(query: string): Observable<SearchResult> {
		return of(
			JSON.parse(`{
			"kind": "customsearch#search",
			"url": {
				"type": "application/json",
				"template": "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json"
			},
			"queries": {
				"request": [{
					"title": "Google Custom Search - lecture",
					"totalResults": "8",
					"searchTerms": "lecture",
					"count": 8,
					"startIndex": 1,
					"inputEncoding": "utf8",
					"outputEncoding": "utf8",
					"safe": "off",
					"cx": "ca8c3d7f40d050e3e"
				}]
			},
			"context": {
				"title": "Cs.byu.edu"
			},
			"searchInformation": {
				"searchTime": 0.481668,
				"formattedSearchTime": "0.48",
				"totalResults": "8",
				"formattedTotalResults": "8"
			},
			"items": [{
					"kind": "customsearch#result",
					"title": "How to Build Visibility",
					"htmlTitle": "How to Build Visibility",
					"link": "https://cs.byu.edu/employment-resources-homepage/how-build-visibility/",
					"displayLink": "cs.byu.edu",
					"snippet": "BYU and the Computer Science Department give companies an opportunity to convey this message face to face. Presentations and Lectures. Information Sessions / ...",
					"htmlSnippet": "BYU and the Computer Science Department give companies an opportunity to convey this message face to face. Presentations and \u003cb\u003eLectures\u003c/b\u003e. Information Sessions /&nbsp;...",
					"cacheId": "D85mfd4iIKUJ",
					"formattedUrl": "https://cs.byu.edu/employment-resources-homepage/how-build-visibility/",
					"htmlFormattedUrl": "https://cs.byu.edu/employment-resources-homepage/how-build-visibility/",
					"pagemap": {
						"metatags": [{
							"viewport": "width=device-width, initial-scale=1.0"
						}]
					}
				},
				{
					"kind": "customsearch#result",
					"title": "Nancy Fulda",
					"htmlTitle": "Nancy Fulda",
					"link": "https://cs.byu.edu/faculty/faculty-directory/nancy-fulda/",
					"displayLink": "cs.byu.edu",
					"snippet": "Course, Title, Semester. C S 142, Intro to Computer Programming, Winter 2020. C S 401R, Topics in Computer Science, Winter 2020.",
					"htmlSnippet": "Course, Title, Semester. C S 142, Intro to Computer Programming, Winter 2020. C S 401R, Topics in Computer Science, Winter 2020.",
					"cacheId": "JXISnxqS7Y0J",
					"formattedUrl": "https://cs.byu.edu/faculty/faculty-directory/nancy-fulda/",
					"htmlFormattedUrl": "https://cs.byu.edu/faculty/faculty-directory/nancy-fulda/",
					"pagemap": {
						"cse_thumbnail": [{
							"src": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTHpQ8Myy2GmFxNF35yyFEqWHleTKN6S2kqt403PqWzsVQaq-kRsu9-CNPC",
							"width": "225",
							"height": "225"
						}],
						"metatags": [{
							"viewport": "width=device-width, initial-scale=1.0"
						}],
						"cse_image": [{
							"src": "https://cs.byu.edu/media/images/Fulda_Nancy_BYU_portrait.c099fa63.fill-720x720-c100.jpg"
						}]
					}
				},
				{
					"kind": "customsearch#result",
					"title": "BYU Computer Science",
					"htmlTitle": "BYU Computer Science",
					"link": "https://cs.byu.edu/",
					"displayLink": "cs.byu.edu",
					"snippet": "Learn everything you need to know about our undergraduate program below. Requirements Courses Scholarships. Graduate Program. We offer both a Masters and a PhD ...",
					"htmlSnippet": "Learn everything you need to know about our undergraduate program below. Requirements Courses Scholarships. Graduate Program. We offer both a Masters and a PhD&nbsp;...",
					"cacheId": "kWZPKvNZ8lYJ",
					"formattedUrl": "https://cs.byu.edu/",
					"htmlFormattedUrl": "https://cs.byu.edu/",
					"pagemap": {
						"cse_thumbnail": [{
							"src": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTmDvdnROq9VoMIP74IxiDu7kQDY6bAh8ugsa5RXfixNzMjKp7sdg5s9nMV",
							"width": "266",
							"height": "190"
						}],
						"metatags": [{
							"viewport": "width=device-width, initial-scale=1.0"
						}],
						"cse_image": [{
							"src": "https://cs.byu.edu/static/core/img/home-programs-fpo-1.jpg"
						}]
					}
				},
				{
					"kind": "customsearch#result",
					"title": "Corporate Relations",
					"htmlTitle": "Corporate Relations",
					"link": "https://cs.byu.edu/employment-resources-homepage/corporate-relations/",
					"displayLink": "cs.byu.edu",
					"snippet": "Here are just some of the benefits to joining the Preferred Partner Program or Advisory Board. Career Fairs · Internships · Educational Lectures · Information ...",
					"htmlSnippet": "Here are just some of the benefits to joining the Preferred Partner Program or Advisory Board. Career Fairs &middot; Internships &middot; Educational \u003cb\u003eLectures\u003c/b\u003e &middot; Information&nbsp;...",
					"cacheId": "v3X5K-NbRCQJ",
					"formattedUrl": "https://cs.byu.edu/employment-resources-homepage/corporate-relations/",
					"htmlFormattedUrl": "https://cs.byu.edu/employment-resources-homepage/corporate-relations/",
					"pagemap": {
						"metatags": [{
							"viewport": "width=device-width, initial-scale=1.0"
						}]
					}
				},
				{
					"kind": "customsearch#result",
					"title": "Christophe Giraud-Carrier",
					"htmlTitle": "Christophe Giraud-Carrier",
					"link": "https://cs.byu.edu/faculty/faculty-directory/christophe-giraud-carrier/",
					"displayLink": "cs.byu.edu",
					"snippet": "Prior to ELCA, Christophe was Senior Lecturer in the Department of Computer Science at the University of Bristol, where he founded and led the Machine ...",
					"htmlSnippet": "Prior to ELCA, Christophe was Senior \u003cb\u003eLecturer\u003c/b\u003e in the Department of Computer Science at the University of Bristol, where he founded and led the Machine&nbsp;...",
					"cacheId": "LGv-s4ZPUi4J",
					"formattedUrl": "https://cs.byu.edu/faculty/faculty-directory/christophe-giraud-carrier/",
					"htmlFormattedUrl": "https://cs.byu.edu/faculty/faculty-directory/christophe-giraud-carrier/",
					"pagemap": {
						"cse_thumbnail": [{
							"src": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTGsaXBrXWDn4SQMyOSuxb5uHKh3ZE04GkLHVWomtnyjXJYww3MV8Sv0J0",
							"width": "225",
							"height": "225"
						}],
						"metatags": [{
							"viewport": "width=device-width, initial-scale=1.0"
						}],
						"cse_image": [{
							"src": "https://cs.byu.edu/media/images/Christophe_Giraud-Carrier_202.2e16d0ba.fill-720x720-c100_eA1t0uy.jpg"
						}]
					}
				},
				{
					"kind": "customsearch#result",
					"title": "BYU Computer Science Department Faculty Expectations",
					"htmlTitle": "BYU Computer Science Department Faculty Expectations",
					"link": "https://cs.byu.edu/documents/3/Faculty_Expectations_February_2013.pdf",
					"displayLink": "cs.byu.edu",
					"snippet": "assessment of an instructor's in-class performance (quality of lectures, ... independent reviewers and 42,000 student hours of lecture.",
					"htmlSnippet": "assessment of an instructor&#39;s in-class performance (quality of \u003cb\u003electures\u003c/b\u003e, ... independent reviewers and 42,000 student hours of \u003cb\u003electure\u003c/b\u003e.",
					"cacheId": "PVaclrrGMRgJ",
					"formattedUrl": "https://cs.byu.edu/documents/3/Faculty_Expectations_February_2013.pdf",
					"htmlFormattedUrl": "https://cs.byu.edu/documents/3/Faculty_Expectations_February_2013.pdf",
					"pagemap": {
						"cse_thumbnail": [{
							"src": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQLazurQompm0CEPZwL00vKGjHR_zIjyqeG_S3cSatfalJWQqGA3EP9ly0",
							"width": "197",
							"height": "255"
						}],
						"metatags": [{
							"moddate": "D:20130806185921Z00'00'",
							"creator": "Word",
							"creationdate": "D:20130806185921Z00'00'",
							"author": "Spotlight",
							"producer": "Mac OS X 10.7.5 Quartz PDFContext",
							"title": "Microsoft Word - Faculty Expectations February 2013.docx"
						}],
						"cse_image": [{
							"src": "x-raw-image:///9a6cb7493feafef9262e78ea09f5e27f6e0e396fbf3ee8ff6e7b6ad9c01fece7"
						}]
					},
					"mime": "application/pdf",
					"fileFormat": "PDF/Adobe Acrobat"
				},
				{
					"kind": "customsearch#result",
					"title": "Computer Science Department History",
					"htmlTitle": "Computer Science Department History",
					"link": "https://cs.byu.edu/faculty/computer-science-department-history/",
					"displayLink": "cs.byu.edu",
					"snippet": "to this, he was Senior Lecturer in the Department of Computer Science at the. University of Bristol, where he founded and led the Machine Learning Research",
					"htmlSnippet": "to this, he was Senior \u003cb\u003eLecturer\u003c/b\u003e in the Department of Computer Science at the. University of Bristol, where he founded and led the Machine Learning Research",
					"cacheId": "uJBf25ciO6MJ",
					"formattedUrl": "https://cs.byu.edu/faculty/computer-science-department-history/",
					"htmlFormattedUrl": "https://cs.byu.edu/faculty/computer-science-department-history/",
					"pagemap": {
						"metatags": [{
							"viewport": "width=device-width, initial-scale=1.0"
						}]
					}
				},
				{
					"kind": "customsearch#result",
					"title": "Untitled",
					"htmlTitle": "Untitled",
					"link": "https://cs.byu.edu/documents/39/THREADS_2020.pdf",
					"displayLink": "cs.byu.edu",
					"snippet": "Dec 8, 2020 ... In other words, value iteration will eventually converge to the optimal value function [10] (See Lecture 3). 30. THREADS ...",
					"htmlSnippet": "Dec 8, 2020 \u003cb\u003e...\u003c/b\u003e In other words, value iteration will eventually converge to the optimal value function [10] (See \u003cb\u003eLecture\u003c/b\u003e 3). 30. THREADS&nbsp;...",
					"formattedUrl": "https://cs.byu.edu/documents/39/THREADS_2020.pdf",
					"htmlFormattedUrl": "https://cs.byu.edu/documents/39/THREADS_2020.pdf",
					"pagemap": {
						"cse_thumbnail": [{
							"src": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcToKYPjMjkgbXKlxiz6YUXdJiCYf20JJjaLL1DCN4ih_ky_q3m8mJD1ZARE",
							"width": "269",
							"height": "187"
						}],
						"metatags": [{
							"moddate": "D:20210112205726Z",
							"creationdate": "D:20201231000936Z",
							"creator": "LaTeX with hyperref",
							"fullbanner": "This is pdfTeX, Version 3.14159265-2.6-1.40.20 (TeX Live 2019) kpathsea version 6.3.1",
							"producer": "3-Heights(TM) PDF Security Shell 4.8.25.2 (http://www.pdf-tools.com) / pdcat (www.pdf-tools.com)"
						}],
						"cse_image": [{
							"src": "x-raw-image:///79a0ab561d5339137f216bdb9f93122fe1033fd302e3d8e5938bcdff4665ae7c"
						}]
					},
					"mime": "application/pdf",
					"fileFormat": "PDF/Adobe Acrobat"
				}
			]
		}`)
		);
	}
}
