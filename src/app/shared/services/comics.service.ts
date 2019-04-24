import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MARVEL_API } from 'src/app/shared/config/api.config';
import { Comics } from '../models/comics.model';
import { Observable } from 'rxjs';

@Injectable()
export class ComicsServices {

    constructor(private http: HttpClient) { }

    characters(): Observable<Comics> {

        return this.http.get<Comics>(`${MARVEL_API.url}comics${MARVEL_API.apikey}&limit=4&orderBy=-modified`);

    }
}