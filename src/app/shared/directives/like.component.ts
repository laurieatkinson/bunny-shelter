import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'my-like',
    templateUrl: 'app/shared/directives/like.component.html',
    styleUrls: ['app/shared/directives/like.component.css']
})
export class LikeComponent implements OnInit, OnChanges {
    @Input() likes: number;
    @Output() anotherLike: EventEmitter<number> = new EventEmitter<number>();

    ngOnInit() {
        console.log("ngOnInit called.");
    }

    ngOnChanges() {
        console.log("ngOnChanges called.");
    }

    increment() {
        this.likes++;
        this.anotherLike.emit(this.likes);
    }
}
