import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { StateStorageService } from './state-storage.service';
import { AuthService } from './auth.service';

@Injectable()
export class UserRouteAccessService implements CanActivate {

    constructor(
        private router: Router,
        private auth: AuthService,
        private $storageService: StateStorageService
    ) {
    }

    canActivate(route: ActivatedRouteSnapshot): boolean | Promise<boolean> {
        let params = route.params;
        let destinationData = route.data;
        let destinationName = route.url;
        let from = { name: this.router.url.slice(1) };
        let destination = { name: destinationName, data: destinationData };
        this.$storageService.storeDestinationState(destination, params, from);
        return this.auth.authorize(false).then(canActivate => canActivate);
    }
}
