import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MARVEL_API } from 'src/app/app.api';
import { Character } from '../models/character.model';

import { Observable } from 'rxjs/';


@Injectable()
export class CharacterServices{

    constructor(private http: HttpClient) {}

    characters(): Observable<Character> {

       return this.http.get<Character>(`${MARVEL_API.url}characters${MARVEL_API.apikey}&limit=16&orderBy=modified&offset=30`);  

    }
}