import { Injectable } from '@angular/core';

@Injectable()
export class MainServices {

    constructor() {}

    public getThumbnail(path: string, extension: string): string {

        return `${path}/portrait_uncanny.${extension}`;

    }

    public randomizeLetter(): string {

        let arrayAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "y", "x", "z"]

        return arrayAlphabet[(Math.floor(Math.random() * (29 - 0) + 0))]
        
    }

}