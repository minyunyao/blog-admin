import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mark',
  template:`<router-outlet></router-outlet>
        <router-outlet name="popup"></router-outlet>`,
  styleUrls: ['./mark.component.css']
})
export class MarkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
