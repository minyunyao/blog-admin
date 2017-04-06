import { RouterModule } from '@angular/router';
import { LeafletComponent } from './leaflet/leaflet.component';
import { UserRouteAccessService } from '../shared';

export const mapsRoutes=[
    {
        path:'leaflet',
        component:LeafletComponent,
        
    }
];