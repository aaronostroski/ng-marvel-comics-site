import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MARVEL_API } from 'src/app/shared/config/api.config';
import { Characters } from 'src/app/shared/models/characters.model';
import { Observable } from 'rxjs';

@Injectable()
export class CharactersServices {

    constructor(private http: HttpClient) { }

    characters(): Observable<Characters> {

        return this.http.get<Characters>(`${MARVEL_API.url}characters${MARVEL_API.apikey}&limit=8&orderBy=-modified`);

    }

}