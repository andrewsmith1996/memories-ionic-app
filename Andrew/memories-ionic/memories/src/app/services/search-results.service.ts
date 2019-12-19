import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchResultsService {

    private search_results: any;

    constructor() { }

    // Setter method for initialising the search results
    public setSearchResults(results){
        this.search_results = results;
    }

    // Getter method for retrieving the search results
    public getSearchResults(){
        return this.search_results;
    }
}
