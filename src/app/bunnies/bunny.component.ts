import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
    templateUrl: 'app/bunnies/bunny.component.html',
})
export class BunnyComponent implements OnInit {

    private bunny: IBunny;
    private sub: any;

    constructor(private route: ActivatedRoute, private router: Router, private _dataService: DataService) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = Number(params['id'])
            //let id = +params['id']; // (+) converts string 'id' to a number
            this._dataService.getBunny(id)
                .subscribe(bunny => this.bunny = bunny);
        });
    }

    adoptBunny() {
        this.router.navigate(['/order', this.bunny.name]);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
