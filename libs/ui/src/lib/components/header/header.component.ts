import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'thinko-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output()
  public toggleSettings = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
