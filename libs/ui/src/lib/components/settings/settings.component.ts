import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AvailableLangs, TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'thinko-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  @Output()
  public closeSettings = new EventEmitter();

  public activeLang: string;
  public availableLangs: AvailableLangs;

  constructor(private _translocoService: TranslocoService) {}

  ngOnInit(): void {
    this.activeLang = this._translocoService.getActiveLang();
    this.availableLangs = this._translocoService.getAvailableLangs();
  }

  public setActiveLang(lang: string): void {
    this._translocoService.setActiveLang(lang);
  }
}
