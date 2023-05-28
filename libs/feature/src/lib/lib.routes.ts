import { Route } from '@angular/router';
import { DynamicContentComponent } from './dynamic-content/dynamic-content.component';
import { StaticContentComponent } from './static-content/static-content.component';

export const featureRoutes: Route[] = [
  {
    path: 'static-content',
    component: StaticContentComponent,
    title: 'Root Route With Static Content Demo',
    data: {
      meta: {
        description: 'Test static-content'
      }
    }
  },
  {
    path: 'dynamic-content',
    component:DynamicContentComponent,
    title: 'Root Route With Dynamic Content Demo',
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
        path: 'static-content',
        component: StaticContentComponent,
        title: 'First Child Route With Static Content Demo',
        data: {
          meta: {
            description: 'Test sub static-content'
          }
        }
      },
      {
        path: 'dynamic-content',
        component:DynamicContentComponent,
        title: 'First Child Route With Dynamic Content Demo',
        data: {
          meta: {
            description: 'Test sub dynamic-content'
          }
        }
      },
      {
        path: 'sub-route',
        children: [
          {
            path: 'static-content',
            component: StaticContentComponent,
            title: 'Second Child Route With Static Content Demo',
            data: {
              meta: {
                description: 'Test sub sub static-content'
              }
            }
          },
          {
            path: 'dynamic-content',
            component: DynamicContentComponent,
            title: 'Second Child Route With Dynamic Content Demo',
            data: {
              meta: {
                description: 'Test sub sub dynamic-content'
              }
            }
          }
        ]
      },
    ]
  },
];
