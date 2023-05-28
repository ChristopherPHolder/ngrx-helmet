import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'ngrx-helmet-static-content',
  standalone: true,
  imports: [CommonModule],
  template: `<p>static-content works!</p><p>{{metaDesc}}</p>`,
  styles: [],
})
export class StaticContentComponent implements OnInit {
  private metaService = inject(Meta).updateTag({ name:'description',content:"Static Content Meta Description"});
  public metaDesc: string | null = '';
  ngOnInit() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.metaDesc = document.querySelector('meta[name="description"]')?.content
  }
}
