import { RouterModule } from '@angular/router';

import { MarkComponent } from './mark.component';
import { MarklistComponent } from './marklist/marklist.component';

export const markRoutes=[
  {
		path:'',
		component:MarkComponent,
        children: [
		{ path: '', redirectTo: 'marklist/page/1', pathMatch: 'full' },
		{ path: 'marklist/page/:page', component: MarklistComponent }
	]
	}
];