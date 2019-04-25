import { Injectable } from '@angular/core';

@Injectable()
export class MainServices {

    constructor() {}

    public getThumbnail(path: string, extension: string): string {

        return `${path}/portrait_uncanny.${extension}`;

    }

}