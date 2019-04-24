import { Component, OnInit, Input } from '@angular/core';
import { CharactersServices } from 'src/app/shared/services/characters.service'
import { footerAnimation } from 'src/app/shared/animations/main.animation'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  animations: [
    footerAnimation
  ]
})
export class FooterComponent implements OnInit {

  @Input() copyright: string;

  constructor(private charactersServices: CharactersServices) { }

  ngOnInit() {

    this.charactersServices.characters().subscribe(data => this.copyright = data.attributionText)

  }

}
