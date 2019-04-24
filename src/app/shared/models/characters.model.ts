export interface Characters {

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

}

export class Results {

    id: number;
    name: string;
    description?: string;
    modified: string;
    thumbnail?: {
        path: string;
        extension: string;
    }
    resourceURI: string;
    comics: {
        available: number;
        collectionURI: string;
        items: Items[];
        returned: number;
    }
    series: {
        available: number;
        collectionURI: string;
        items: Items[];
        returned: number;
    }
    stories: {
        available: number;
        collectionURI: string;
        items: Items[];
        returned: number;
    }
    events: {
        available: number;
        collectionURI: string;
        items: Items[];
        returned: number;
    }
    urls: [{
        type: string;
        url: string;
    }]

}

export interface Items {

    resourceURI: string
    name: string
    type?: string

}