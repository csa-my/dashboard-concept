import { Routes } from '@angular/router';
import { BaseLayoutComponent } from '@layouts/base-layout/base-layout.component';
// import { StarterComponent } from '@pages/starter/starter.component';

export const routes: Routes = [
  {
    path: '',
    // component: StarterComponent,
    component: BaseLayoutComponent,
    // data: {
    //   title: 'Starter',
    //   urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Starter' }],
    // },
  },
];
