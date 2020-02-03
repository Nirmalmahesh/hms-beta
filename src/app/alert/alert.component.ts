import { Component, OnInit, Input } from '@angular/core';
import { CustomError } from '../model/customError';

@Component({
  selector: 'hms-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  constructor() { }
  @Input('error') error: CustomError;
  ngOnInit() {
  }

}
