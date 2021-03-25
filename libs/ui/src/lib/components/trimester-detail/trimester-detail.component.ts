import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'thinko-trimester-detail',
  templateUrl: './trimester-detail.component.html',
  styleUrls: ['./trimester-detail.component.scss'],
})
export class TrimesterDetailComponent implements OnInit {
  @Input()
  public title: string | number;

  @Output()
  public openDialog = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
