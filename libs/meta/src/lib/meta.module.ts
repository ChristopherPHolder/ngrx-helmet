import { inject, ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { MetaService } from './meta.service';

@NgModule({})
export class MetaModule {
  private metaService = inject(MetaService);
  static forRoot(): ModuleWithProviders<MetaModule> {
    return { ngModule: MetaModule, providers: [MetaService] }
  }

  constructor(@Optional() @SkipSelf() parentModule?: MetaModule) {
    if (parentModule) {
      throw new Error('MetaModule already loaded; import in root module only.');
    }
    this.metaService.init();
  }
}
