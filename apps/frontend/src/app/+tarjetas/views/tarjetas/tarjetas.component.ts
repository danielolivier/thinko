import { Component, OnInit } from '@angular/core';
import { EventHandlerService } from 'libs/rest-api/src/lib/services/event-handler/event-handler.service';

@Component({
  selector: 'thinko-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.scss'],
})
export class TarjetasComponent implements OnInit {
  constructor(public eventHandlerService: EventHandlerService) {}

  ngOnInit(): void {}
}
