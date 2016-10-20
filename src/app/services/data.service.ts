import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
    private _bunnyUrl = 'api/bunnies.json';

    constructor(private _http: Http) { }

    getBunnies(): Observable<IBunny[]> {
        return this._http.get(this._bunnyUrl)
            .map((response: Response) => <IBunny[]>response.json())
            .catch(this.handleError);
    }

    getBunny(id: number): Observable<IBunny> {
        return this.getBunnies()
            .map((bunnies: IBunny[]) => bunnies.find(b => b.id === id));
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
