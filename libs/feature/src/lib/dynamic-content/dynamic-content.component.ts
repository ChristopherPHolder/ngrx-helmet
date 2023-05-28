import { Component, DoCheck, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngrx-helmet-dynamic-content',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>{{ title | async }}</h1> <p>{{metaDesc}}</p>`,
  styles: [],
})
export class DynamicContentComponent implements DoCheck {
  public readonly title = inject(ActivatedRoute).title;
  public metaDesc = '';

  ngDoCheck() {
    this.metaDesc =  document.querySelector<any>('meta[name="title"]')?.content;
  }
}
