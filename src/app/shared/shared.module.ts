import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ColorRangePipe } from './pipes/color-range.pipe';
import { LikeComponent } from './directives/like.component';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [LikeComponent, ColorRangePipe],
    exports: [CommonModule, FormsModule, LikeComponent, ColorRangePipe]
})
export class SharedModule { }