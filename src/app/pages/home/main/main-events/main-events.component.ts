import { Component, OnInit, Input } from '@angular/core';
import { EventsServices } from 'src/app/shared/services/api/events.service';
import { MainServices } from 'src/app/shared/services/components/main.service';
import { Results } from 'src/app/shared/models/events.model';
import { mainAnimation } from 'src/app/shared/animations/main.animation';

@Component({
  selector: 'app-main-events',
  templateUrl: './main-events.component.html',
  styleUrls: ['./main-events.component.css'],
  animations: [
    mainAnimation
  ]
})

export class MainEventsComponent implements OnInit {

  @Input() results: Results[]

  button: boolean = true;

  constructor(private eventsService: EventsServices, public mainServices: MainServices) { }

  ngOnInit() {

    this.eventsService.events().subscribe(data => this.results = data.data.results)

  }

  getThumbnail(path: string, extension: string): string {

    return this.mainServices.getThumbnail(path, extension)

  }

}
