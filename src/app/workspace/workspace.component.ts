import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { FooterInfoComponent } from './footer-info/footer-info.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { StateStorageService } from '../shared/auth/state-storage.service';
require("assets/js/jquery.nicescroll.js");
require("assets/js/jquery.scrollTo.min.js");

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit() {
    //用require动态加载的外部JS
  		require("assets/js/common-scripts.js");

  }

}
