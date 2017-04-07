import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService,Principal,Account } from '../../shared';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
  account: Account;

  constructor(
    public loginService:LoginService,
    private router: Router,
    private principal: Principal
  ) { }

  ngOnInit() {
     this.principal.identity().then((account) => {
            this.account = account;
        });
  }
  logout(){
    this.loginService.logout();
    this.router.navigate(['login']);
  }

}
