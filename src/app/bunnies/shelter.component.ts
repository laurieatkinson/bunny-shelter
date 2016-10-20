import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
    selector: 'my-shelter',
    templateUrl: 'app/bunnies/shelter.component.html'
})
export class ShelterComponent implements OnInit {
    private pageTitle = 'Show me the bunnies';
    private bunnies: Array<IBunny>;

    private maxAge = 10;
    private shelterRating = 85;
    private errorMessage = '';

    constructor(private router: Router, private _dataService: DataService) {
    }

    ngOnInit() {
        this._dataService.getBunnies()
            .subscribe(
                bunnies => this.bunnies = bunnies,
                error => this.errorMessage = <any>error);
    }

    hide(id) {
        var selectedBunnies = this.bunnies.filter((bunny) => {
            return bunny.id == id;
        });
        if (selectedBunnies.length > 0) {
            selectedBunnies[0].hidden = true;
        }
    }
    showAll() {
        this.bunnies.forEach((bunny) => {
            bunny.hidden = false;
        });
    }

    updateMostPopularBunny(bunny: IBunny) {
        bunny.likes++;
        var maxLikes = 0;
        var mostPopularBunny: IBunny;
        this.bunnies.forEach((b) => {
            b.isMostPopular = false;
            if (b.likes > maxLikes) {
                maxLikes = b.likes;
                mostPopularBunny = b;
            }
        });

        if (mostPopularBunny) {
            mostPopularBunny.isMostPopular = true;
        }
    }

    onSelect(bunny: IBunny) {
        this.router.navigate(['/shelter', bunny.id]);
    }
}
