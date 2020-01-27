import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hms-card-display-details',
  templateUrl: './card-display-details.component.html',
  styleUrls: ['./card-display-details.component.scss']
})
export class CardDisplayDetailsComponent implements OnInit {

  constructor() { }
  @Input("data") data : any;
  @Input("img")  src : String;
  @Input("title") title : String;
  ngOnInit() {
    console.log(this.data);
  }

}
