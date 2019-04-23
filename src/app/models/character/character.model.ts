import { Items } from './items.model'
import { Results } from './results.model'

export class Character {

    code: number;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    etag: string;
    data?: {
        offset: number;
        limit: number;
        total: number;
        count: number;
        results: Results[]
}
        

     
    
    constructor() {}

 
}