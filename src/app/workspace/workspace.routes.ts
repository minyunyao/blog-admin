import { WorkspaceComponent } from './workspace.component';
import { UserRouteAccessService } from '../shared';

export const workspaceRoutes = [
	{
		path: '',
		component: WorkspaceComponent,
		canActivate: [UserRouteAccessService],
		children: [
			{ path: '', redirectTo: 'mark', pathMatch: 'full' },
			{ path: 'mark', loadChildren: '../mark/mark.module#MarkModule' },
			{ path: 'user', loadChildren: '../user/user.module#UserModule' },
			{ path: 'map', loadChildren: '../maps/maps.module#MapsModule' },
		]
	}
];
