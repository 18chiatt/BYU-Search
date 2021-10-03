// Generated by https://quicktype.io

export interface SearchResult {
	kind: string;
	url: URL;
	queries: Queries;
	context: Context;
	searchInformation: SearchInformation;
	items: Item[];
}

export interface Context {
	title: string;
}

export interface Item {
	kind: string;
	title: string;
	htmlTitle: string;
	link: string;
	displayLink: string;
	snippet: string;
	htmlSnippet: string;
	cacheId?: string;
	formattedUrl: string;
	htmlFormattedUrl: string;
	pagemap: Pagemap;
	mime?: string;
	fileFormat?: string;
}

export interface Pagemap {
	metatags: Metatag[];
	cse_thumbnail?: CSEThumbnail[];
	cse_image?: CSEImage[];
}

export interface CSEImage {
	src: string;
}

export interface CSEThumbnail {
	src: string;
	width: string;
	height: string;
}

export interface Metatag {
	viewport?: string;
	moddate?: string;
	creator?: string;
	creationdate?: string;
	author?: string;
	producer?: string;
	title?: string;
	fullbanner?: string;
}

export interface Queries {
	request: Request[];
}

export interface Request {
	title: string;
	totalResults: string;
	searchTerms: string;
	count: number;
	startIndex: number;
	inputEncoding: string;
	outputEncoding: string;
	safe: string;
	cx: string;
}

export interface SearchInformation {
	searchTime: number;
	formattedSearchTime: string;
	totalResults: string;
	formattedTotalResults: string;
}

export interface URL {
	type: string;
	template: string;
}
