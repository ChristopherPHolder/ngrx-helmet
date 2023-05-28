import { Component, DoCheck, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { filter, tap } from 'rxjs';

@Component({
  selector: 'ngrx-helmet-dynamic-content',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>{{ title | async }}</h1> <p>{{metaDesc}}</p>`,
  styles: [],
})
export class DynamicContentComponent implements DoCheck {
  private metaService = inject(Meta);
  public readonly title = inject(ActivatedRoute).title.pipe(
    filter((title) => title != undefined),
    tap((title) =>
      setTimeout(() => this.metaService.updateTag({ name: 'title', content: title as string }), 1_000)
      ));

  public metaDesc = '';

  ngDoCheck() {
    this.metaDesc =  document.querySelector<any>('meta[name="title"]')?.content;
  }
}
