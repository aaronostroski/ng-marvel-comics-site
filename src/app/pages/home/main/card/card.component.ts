import { Component, OnInit } from '@angular/core';
import { Results } from 'src/app/shared/models/character.model'
import { CharacterServices } from 'src/app/shared/services/characters.service'
import { homeAnimation } from 'src/app/shared/animations/home.animation'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    homeAnimation
  ]
})

export class CardComponent implements OnInit {

  results: Results[];
  
  constructor(private characterServices: CharacterServices) {}

  ngOnInit() {

    this.characterServices.characters().subscribe(data => this.results = data.data.results)
    
  }

  public getThumbnail(path, extension): string {

    return `${path}/portrait_uncanny.${extension}`

  }

}
