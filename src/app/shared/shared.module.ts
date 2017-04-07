import { NgModule,ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from 'ng2-translate';

import { CookieService } from 'angular2-cookie/services/cookies.service';
import {
    CSRFService,
    AuthService,
    AuthServerProvider,
    AccountService,
    Principal,
    StateStorageService,
    LoginComponent,
    LoginService,
    UserService
} from './';

@NgModule({
  imports:[ 
  	CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  providers:[
    CSRFService,
    AuthService,
    AuthServerProvider,
    AccountService,
    Principal,
    StateStorageService,
    LoginService,
    UserService
  ],
  exports:[
  	CommonModule,
  	FormsModule,
    TranslateModule
  ],
  declarations:[
    LoginComponent
  ]
})

export class SharedModule {
    
}