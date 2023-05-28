import { inject, ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { MetaHelmet } from './meta-helmet.service';

@NgModule({})
export class MetaModule {
  private metaHelmet = inject(MetaHelmet);
  static forRoot(): ModuleWithProviders<MetaModule> {
    return { ngModule: MetaModule, providers: [MetaHelmet] }
  }

  constructor(@Optional() @SkipSelf() parentModule?: MetaModule) {
    if (parentModule) {
      throw new Error('MetaModule already loaded; import in root module only.');
    }
    this.metaHelmet.init();
  }
}
