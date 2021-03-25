import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogAcceptComponent } from 'libs/ui/src/lib/components/dialog-accept/dialog-accept.component';

@Component({
  selector: 'thinko-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  constructor(private _router: Router, public _dialog: MatDialog) {}

  ngOnInit(): void {}

  public goToHomepage(): void {
    this._router.navigate(['/home']);
  }

  public onOpenDialog(): void {
    const dialogRef = this._dialog.open(DialogAcceptComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100vw',
    });
  }
}
