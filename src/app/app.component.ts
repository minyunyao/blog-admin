import { Component, HostListener, ElementRef, Renderer, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot, NavigationEnd, RoutesRecognized } from '@angular/router';
import { TranslateService } from 'ng2-translate';
import 'rxjs/add/operator/merge';
import { StateStorageService } from './shared/auth/state-storage.service';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private globalClickCallbackFn: Function;
	private loginSuccessCallbackFn: Function;
  constructor(
		public elementRef: ElementRef,
		public renderer: Renderer,
		public router: Router,
		public activatedRoute: ActivatedRoute,
		public translate: TranslateService,
		public toastr: ToastsManager,
		public vcr: ViewContainerRef,
		private $storageService: StateStorageService
	) {
		this.toastr.setRootViewContainerRef(vcr);
	}
  ngOnInit() {
		this.router.events.subscribe((event) => {
			console.log(event);
      if (event instanceof RoutesRecognized) {
                let params = {};
                let destinationData = {};
                let destinationName = '';
                let destinationEvent = event.state.root.firstChild.children[0];
								console.log(destinationEvent);
                if (destinationEvent !== undefined) {
								console.log(destinationEvent.url[0]);
                    params = destinationEvent.params;
                    destinationData = destinationEvent.data;
                    // destinationName = destinationEvent.url[0].path;
										destinationName=event.url;
                }
                let from = {name: this.router.url.slice(1)};
                let destination = {name: destinationName, data: destinationData};
                this.$storageService.storeDestinationState(destination, params, from);
            }
    })
		this.globalClickCallbackFn = this.renderer.listen(this.elementRef.nativeElement, 'click', (event: any) => {
			console.log("全局监听点击事件>" + event);
		});

		this.translate.addLangs(["zh", "en"]);
		this.translate.setDefaultLang('zh');

		const browserLang = this.translate.getBrowserLang();
		console.log("检测到的浏览器语言>" + browserLang);
		this.translate.use(browserLang.match(/zh|en/) ? browserLang : 'zh');
	}

	ngOnDestroy() {
		if (this.globalClickCallbackFn) {
			this.globalClickCallbackFn();
		}
	}
}
