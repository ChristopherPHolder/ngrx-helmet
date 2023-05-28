import { Component, DoCheck, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngrx-helmet-dynamic-content',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>{{ title | async }}</h1> <p>{{metaDesc}}</p>`,
  styles: [],
})
export class DynamicContentComponent implements OnInit, DoCheck {
  public readonly title = inject(ActivatedRoute).title;
  private metaService = inject(Meta);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  public metaDesc: string | null = document.querySelector('meta[name="description"]')?.content;
  ngOnInit() {
    setTimeout(()=> {
      this.metaService.updateTag({ name:'description',content:"Dynamic Content Meta Description"});
    }, 1_000);
  }

  ngDoCheck() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.metaDesc =  document.querySelector('meta[name="description"]')?.content;
  }
}
