import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-un-bound-info',
  templateUrl: './un-bound-info.component.html',
  styleUrls: ['./un-bound-info.component.scss']
})
export class UnBoundInfoComponent implements OnInit {
@Input()
unBoundMark:any;
  constructor() { }

  ngOnInit() {
  }
  public closeWin():void{
    this.unBoundMark=null;
  }

}
