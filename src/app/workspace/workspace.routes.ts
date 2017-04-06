import { WorkspaceComponent } from './workspace.component';
import { UserRouteAccessService } from '../shared';

export const workspaceRoutes = [
	{
		path: '',
		component: WorkspaceComponent,
		children: [
			// { path: '', redirectTo: 'map', pathMatch: 'full' },
			{ path: 'user', loadChildren: '../user/user.module#UserModule' },
			{ path: 'map', loadChildren: '../maps/maps.module#MapsModule'},
		]
	}
];
