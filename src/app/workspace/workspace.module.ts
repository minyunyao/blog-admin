import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { ModalModule } from 'ng2-bootstrap';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { FooterInfoComponent } from './footer-info/footer-info.component';
import { WorkspaceComponent } from './workspace.component';
import { workspaceRoutes } from './workspace.routes';

@NgModule({
    imports: [
        RouterModule.forChild(workspaceRoutes),
        ModalModule.forRoot()
    ],
    exports: [],
    declarations: [
        WorkspaceComponent,
        TopMenuComponent,
        FooterInfoComponent
    ],
    providers: [],
})
export class WorkspaceModule { }
