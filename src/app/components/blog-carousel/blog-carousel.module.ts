import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogCarouselComponent } from './blog-carousel.component';
import { OwlModule } from 'ngx-owl-carousel';
import { BlogCardModule } from '../blog-card/blog-card.module';

@NgModule({
  declarations: [BlogCarouselComponent],
  imports: [
    CommonModule,
    OwlModule,
    BlogCardModule
  ],
  exports: [BlogCarouselComponent]
})
export class BlogCarouselModule { }
