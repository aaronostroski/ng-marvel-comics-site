import { Component, OnInit, Input } from '@angular/core';
import { Results } from 'src/app/shared/models/character.model'
import { CharactersServices } from 'src/app/shared/services/characters.service'
import { mainAnimation } from 'src/app/shared/animations/main.animation'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    mainAnimation
  ]
})

export class MainComponent implements OnInit {

  @Input() results: Results[];
  
  constructor(private characterServices: CharactersServices) {}

  ngOnInit() {

    this.characterServices.characters().subscribe(data => this.results = data.data.results)
    
  }

  public getThumbnail(path, extension): string {

    return `${path}/portrait_uncanny.${extension}`

  }

}
