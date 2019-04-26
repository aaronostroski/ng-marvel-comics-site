import { Component, OnInit, Input } from '@angular/core';
import { CharactersServices } from 'src/app/shared/services/api/characters.service'
import { MainServices } from 'src/app/shared/services/components/main.service';
import { Results } from 'src/app/shared/models/characters.model'
import { mainAnimation } from 'src/app/shared/animations/main.animation'


@Component({
  selector: 'app-main-character',
  templateUrl: './main-character.component.html',
  styleUrls: ['./main-character.component.css'],
  animations: [
    mainAnimation
  ]
})

export class MainCharacterComponent implements OnInit {

  @Input() results: Results[]

  button: boolean = true;

  constructor(private characterServices: CharactersServices, public mainServices: MainServices) { }

  ngOnInit() {

    this.characterServices.characters().subscribe(data => this.results = data.data.results)

  }

  clickRandomize() {

    this.button = false;

    this.characterServices.charactersRandomize(this.mainServices.randomizeLetter()).subscribe(data => {
      
      this.results = data.data.results

      this.button = true;
    
    })

  }

  getThumbnail(path: string, extension: string): string {

    return this.mainServices.getThumbnail(path, extension);

  }

}






