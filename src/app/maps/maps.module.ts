import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Ng2DraggableModule } from 'ng2-draggable'


import { LeafletComponent } from './leaflet/leaflet.component';
import { mapsRoutes } from './maps.routes';
import { LeafletService } from './leaflet/services/leaflet.service';
import { BoundInfoComponent } from './bound-info/bound-info.component';
import { UnBoundInfoComponent } from './un-bound-info/un-bound-info.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    Ng2DraggableModule,
    RouterModule.forChild(mapsRoutes)
  ],
  declarations: [
    LeafletComponent,
    BoundInfoComponent,
    UnBoundInfoComponent
  ],
  providers: [
    LeafletService
  ]
})
export class MapsModule {}
