import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../shared/login/login.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  constructor(
    public loginService:LoginService,
    private router: Router,
  ) { }

  ngOnInit() {
  }
  logout(){
    this.loginService.logout();
    this.router.navigate(['login']);
  }

}
