import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'thinko-dialog-accept',
  templateUrl: './dialog-accept.component.html',
  styleUrls: ['./dialog-accept.component.scss'],
})
export class DialogAcceptComponent implements OnInit {
  constructor(
    private _dialogRef: MatDialogRef<DialogAcceptComponent>,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  public goToMenu(): void {
    this._router.navigate(['/']);
    this._dialogRef.close();
  }
}
