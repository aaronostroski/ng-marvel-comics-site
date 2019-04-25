import { Component, OnInit, Input } from '@angular/core';
import { ComicsServices } from 'src/app/shared/services/api/comics.service'
import { MainServices } from 'src/app/shared/services/components/main.service'
import { Results } from 'src/app/shared/models/comics.model';
import { mainAnimation } from 'src/app/shared/animations/main.animation'

@Component({
  selector: 'app-main-comics',
  templateUrl: './main-comics.component.html',
  styleUrls: ['./main-comics.component.css'],
  animations: [
    mainAnimation
  ]
})

export class MainComicsComponent implements OnInit {

  @Input() results: Results[]

  constructor(private comicsServices: ComicsServices, public mainServices: MainServices) { 

  }

  ngOnInit() {

    this.comicsServices.characters().subscribe(data => this.results = data.data.results)

  }

  getThumbnail(path: string, extension: string): string {

    return this.mainServices.getThumbnail(path, extension);

  }

}
