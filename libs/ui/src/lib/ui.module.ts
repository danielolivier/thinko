import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslocoModule } from '@ngneat/transloco';

import { HeaderComponent } from './components/header/header.component';
import { SettingsComponent } from './components/settings/settings.component';
import { MiniInfoCardComponent } from './components/mini-info-card/mini-info-card.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TrimesterDetailComponent } from './components/trimester-detail/trimester-detail.component';
import { DialogAcceptComponent } from './components/dialog-accept/dialog-accept.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatDialogModule,
    TranslocoModule,
  ],
  declarations: [
    HeaderComponent,
    SettingsComponent,
    MiniInfoCardComponent,
    NotFoundComponent,
    TrimesterDetailComponent,
    DialogAcceptComponent,
  ],
  exports: [
    HeaderComponent,
    SettingsComponent,
    MiniInfoCardComponent,
    TrimesterDetailComponent,
    DialogAcceptComponent,
  ],
})
export class UiModule {}
