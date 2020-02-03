import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'hms-card-display-details',
  templateUrl: './card-display-details.component.html',
  styleUrls: ['./card-display-details.component.scss']
})
export class CardDisplayDetailsComponent implements OnInit {

  constructor() { }
  @Input('data') data: any;
  @Input('img') src: string;
  @Input('title') title: string;
  @Output('delete') delete: EventEmitter<any> = new EventEmitter<any>();
  @Input('isLoading') isLoading: boolean;
  ngOnInit() {
    console.log(this.isLoading);
    console.log(this.data);
  }

  deleteCard = (doctorId, event) => {
    event.target.children[0].classList.remove('d-none');

    this.delete.emit(doctorId);
  }

}
