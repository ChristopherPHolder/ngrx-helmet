import { Component, DoCheck, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'ngrx-helmet-static-content',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>{{ title | async }}</h1><p>{{metaDesc}}</p>`,
  styles: [],
})
export class StaticContentComponent implements DoCheck {
  private metaService = inject(Meta);
  public readonly title = inject(ActivatedRoute).title.pipe(
    tap((title) => console.log(title)),
    tap((title) => this.metaService.updateTag({ name:'description', content: title as string}))
  );
  public metaDesc = '';
  ngDoCheck() {
    this.metaDesc =  document.querySelector<any>('meta[name="description"]')?.content;
  }
}
