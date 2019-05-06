import { Component, OnInit, Input } from '@angular/core';
import { ComicsServices } from 'src/app/shared/services/api/comics.service'
import { MainServices } from 'src/app/shared/services/components/main.service'
import { Results } from 'src/app/shared/models/comics.model';
import { mainAnimation } from 'src/app/shared/animations/main.animation'
import { TouchSequence } from 'selenium-webdriver';

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

  button: boolean = true

  constructor(private comicsServices: ComicsServices, public mainServices: MainServices) { 

  }

  ngOnInit() {

    this.comicsServices.comics().subscribe(data => this.results = data.data.results)

  }

  clickRandomize(): void {

    this.button = false;

    this.comicsServices.comicsRandomize(this.mainServices.randomizeLetter()).subscribe(data => {
      
      this.results = data.data.results

      this.button = true;

    })

  }


  getThumbnail(path: string, extension: string): string {

    return this.mainServices.getThumbnail(path, extension);

  }



}
