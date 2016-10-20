import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'order-form',
    templateUrl: 'app/orders/order-form.component.html'
})
export class OrderFormComponent {

    submitted = false;
    active = true;
    order = {
        ownerName: "",
        ownerEmail: "",
        bunnyName: ""
    };
    private sub: any;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.order.bunnyName = params['name'];
        });
    }

    onSubmit() {
        this.submitted = true;
    }

    newOrder() {
        this.order = {
            ownerName: "",
            ownerEmail: "",
            bunnyName: ""
        };
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }
}