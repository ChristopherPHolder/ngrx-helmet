import { Route } from '@angular/router';
import { DynamicContentComponent } from './dynamic-content/dynamic-content.component';
import { StaticContentComponent } from './static-content/static-content.component';

export const featureRoutes: Route[] = [
  {
    path: 'static-content',
    component: StaticContentComponent,
    data: {
      meta: {
        description: 'Test static-content'
      }
    }
  },
  {
    path: 'dynamic-content',
    component:DynamicContentComponent,
    data: {
      meta: {
        description: 'Test dynamic-content'
      }
    }
  },
  {
    path: 'sub-route',
    children: [
      {
        path: 'sub-route',
        children: [
          {
            path: 'static-content',
            component: StaticContentComponent,
            data: {
              meta: {
                description: 'Test sub sub static-content'
              }
            }
          },
          {
            path: 'dynamic-content',
            component: DynamicContentComponent,
            data: {
              meta: {
                description: 'Test sub sub dynamic-content'
              }
            }
          }
        ]
      },
      {
        path: 'static-content',
        component: StaticContentComponent,
        data: {
          meta: {
            description: 'Test sub static-content'
          }
        }
      },
      {
        path: 'dynamic-content',
        component:DynamicContentComponent,
        data: {
          meta: {
            description: 'Test sub dynamic-content'
          }
        }
      },
    ]
  },
];
