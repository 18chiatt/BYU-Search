import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from '../seach.service';

@Component({
    selector: 'advanced-search',
    templateUrl: 'advanced-search.component.html',
    styleUrls: ['./advanced-search.component.scss']
})

export class AdvancedSearchComponent implements OnInit {
    constructor(private route: ActivatedRoute, private search: SearchService, private router: Router) { }
    ed: string;
    sd: string;

    start = new FormControl(new Date())
    end = new FormControl(new Date())
    p : boolean;
    c : boolean;
    e: boolean;
    s: boolean;
    j: boolean;

    currQuery:string = '';

    booleanKeys = ['p','c','e','s','j']
    stringKeys = ['ed', 'sd']


    ngOnInit() { 

        this.search.getSearchString().subscribe(str => this.currQuery = str);

        setTimeout(() => {

            const queryParamMap = this.route.snapshot.queryParamMap;
            this.start.setValue(queryParamMap.get('sd') ? new Date( queryParamMap.get('sd')) : null )
            this.end.setValue(queryParamMap.get('ed') ? new Date( queryParamMap.get('ed') ) : null )

            for(const booleanKey of this.booleanKeys) {
                this[booleanKey] = !!queryParamMap.get(booleanKey);
            }

            // data race action to avoid populating before route is ready

        }, 100)



    }

    setParams() {
        const params = {q: this.search.getPendingSearch() ||  this.currQuery}
        if(this.start.value) {
            const d = (this.start.value as Date)
            params['sd'] = `${d.getFullYear() }-${d.getMonth() + 1}-${d.getDate()};`
        }

        if(this.end.value) {
            const d = (this.end.value as Date)
            params['ed'] = `${d.getFullYear() }-${d.getMonth() + 1}-${d.getDate()};`
        }

        for(const key of this.booleanKeys) {
            if(this[key]){
                params[key]='t'
            }
        }
        this.router.navigate([], {queryParams: params})
    }
}