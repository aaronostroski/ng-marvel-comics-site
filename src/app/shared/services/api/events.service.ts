import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MARVEL_API } from 'src/app/shared/config/api.config';
import { Events } from 'src/app/shared/models/events.model';
import { Observable } from 'rxjs';

@Injectable()
export class EventsServices {

    constructor(private http: HttpClient) {}

    events(): Observable<Events> {

        return this.http.get<Events>(`${MARVEL_API.url}events${MARVEL_API.apikey}&limit=4&orderBy=-modified`)
        
    }

}