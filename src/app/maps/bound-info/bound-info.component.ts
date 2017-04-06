import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-bound-info',
  templateUrl: './bound-info.component.html',
  styleUrls: ['./bound-info.component.css']
})
export class BoundInfoComponent implements OnInit {
@Input()
boundMark:any;
  constructor() { }

  ngOnInit() {
  }
  public closeWin():void{
    this.boundMark=null;
  }

}
