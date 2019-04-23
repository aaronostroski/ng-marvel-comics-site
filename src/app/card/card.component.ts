import { Component, OnInit } from '@angular/core';

import { Character } from '../models/character/character.model'
import { Results } from '../models/character/results.model'
import { Items } from '../models/character/items.model'

import { HttpClient } from '@angular/common/http';
import { URL } from 'src/app/app.api';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  results: Results[];
  
  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get<Character>(URL)
    .subscribe(data => this.results = data.data.results);

    
  }

  getThumbnail(path, extension){

    return `${path}/portrait_uncanny.${extension}`

}
}
