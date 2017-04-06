import { Component, OnInit,AfterViewInit, Renderer, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user-model';
import { LoginService } from '../login/login.service';
import { StateStorageService } from '../auth/state-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit , AfterViewInit{
    public user: User = new User();
    authenticationError: boolean;
    credentials: any;

  constructor(
        private loginService: LoginService,
        private stateStorageService: StateStorageService,
        private elementRef: ElementRef,
        private renderer: Renderer,
        private router: Router
  ) { 
    this.credentials = {};
  }

  ngOnInit() {
  }
  ngAfterViewInit() {
        this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#userName'), 'focus', []);
    }
     cancel () {
        this.credentials = {
            username: null,
            password: null,
            rememberMe: true
        };
      this.authenticationError = false;
    }
    login(){
      this.loginService.login({
            username: this.user.userName,
            password: this.user.password,
            rememberMe: this.user.remeberMe
        }).then(()=>{
          this.authenticationError = false;
          if (this.router.url === '/register' || (/activate/.test(this.router.url)) ||
                this.router.url === '/finishReset' || this.router.url === '/requestReset') {
                this.router.navigate(['']);
          }
          this.router.navigateByUrl("workspace");
          /**返回登录前的页面 */
          // let previousState = this.stateStorageService.getPreviousState();
          // if (previousState) {
          //       this.stateStorageService.resetPreviousState();
          //       this.router.navigate([previousState.name], { queryParams:  previousState.params });
                
          //   }
        }).catch(()=>{
          this.authenticationError=true;
        })
    }
    register () {
        this.router.navigate(['/register']);
    }
    requestResetPassword () {
        this.router.navigate(['/reset', 'request']);
    }

}
