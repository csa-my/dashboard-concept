import { Routes } from '@angular/router';
import { StarterComponent } from '@pages/starter/starter.component';

export const routes: Routes = [
  {
    path: '',
    component: StarterComponent,
    data: {
      title: 'Starter',
      urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Starter' }],
    },
  },
];
