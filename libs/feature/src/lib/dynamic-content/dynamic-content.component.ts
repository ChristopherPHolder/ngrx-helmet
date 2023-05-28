import { ApplicationRef, Component, DoCheck, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'ngrx-helmet-dynamic-content',
  standalone: true,
  imports: [CommonModule],
  template: `<p>dynamic-content works!</p> <p>{{metaDesc}}</p>`,
  styles: [],
})
export class DynamicContentComponent implements OnInit, DoCheck {
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
