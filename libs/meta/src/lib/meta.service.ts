import { inject, Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class MetaService {
  private metaH = inject(Router).events.pipe(
    filter(event => event instanceof NavigationEnd)
  )

  private activatedRoute = inject(ActivatedRoute);

  public init(): void {
    this.metaH.subscribe((event) => {
      console.log('NavigationEnd:', event);
      let currentRoute = this.activatedRoute.root;
      while (currentRoute.firstChild) currentRoute = currentRoute.firstChild;

      currentRoute.data.subscribe(data => {
        console.log('Route data:', data['meta']['description']);
      });
    });
  }
}
