import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'thinko-mini-info-card',
  templateUrl: './mini-info-card.component.html',
  styleUrls: ['./mini-info-card.component.scss'],
})
export class MiniInfoCardComponent implements OnInit {
  @Input()
  public title: string;

  @Input()
  public progress;

  constructor() {}

  ngOnInit(): void {}
}
