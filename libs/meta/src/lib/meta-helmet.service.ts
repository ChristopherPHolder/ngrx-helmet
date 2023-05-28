import { inject, Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, Subject } from 'rxjs';
import { Meta, MetaDefinition } from '@angular/platform-browser';
@Injectable({ providedIn: 'root' })
export class MetaHelmet {
  private metaService = inject(Meta);
  private activatedRoute = inject(ActivatedRoute);
  private navigationEnd$ = inject(Router).events.pipe(
    filter(event => event instanceof NavigationEnd)
  )

  public metaMap = new Subject<object>();
  public metaMap$ = this.metaMap.asObservable();
  public init(): void {
    this.navigationEnd$.subscribe((event) => {
      let currentRoute = this.activatedRoute.root;
      while (currentRoute.firstChild) currentRoute = currentRoute.firstChild;
      currentRoute.data.subscribe(data => {
        this.metaMap.next(data['meta']);
      });
    });
    this.metaMap$.subscribe((v) => {
      Object.entries(v).map((e) => {
        const metaDefinition: MetaDefinition = { name: e[0], content: e[1]}
        this.metaService.updateTag(metaDefinition);
      });
    });
  }
}
