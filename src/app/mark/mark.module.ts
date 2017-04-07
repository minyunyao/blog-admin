import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MarkComponent } from './mark.component';
import { PaginationModule } from 'ng2-bootstrap';
import { MarklistComponent } from './marklist/marklist.component';
import { markRoutes } from './mark.routes';

@NgModule({
    imports: [
        RouterModule,
        PaginationModule.forRoot(),
        RouterModule.forChild(markRoutes)
    ],
    exports: [],
    declarations: [
       MarkComponent,
       MarklistComponent
    ],
    providers: [
      
    ]
})
export class MarkModule { }