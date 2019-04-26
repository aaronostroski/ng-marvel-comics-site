export interface Events {

    code: number;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    data: {
        offset: number;
        limit: number;
        total: number;
        count: number;
        results: []
    }
    etag: string

}

export interface Results {

    id: number;
    title: string;
    description: string;
    resourceURI: string;
    urls: [
        {
            type: string;
            url: string;
        }
    ],
    modified: string;
    start: string;
    end: string;
    thumbnail: {
        path: string;
        extension: string;
    };
    series: {
        available: number;
        returned: number;
        collectionURI: string,
        items: [
            {
                resourceURI: string,
                name: string
            }
        ]
    };
    creators:{
        available: number;
        collectionURI: string;
        items:[
            {
                resourceURI: string;
                name: string;
                role: string
            }
        ]
        returned: number;
    };
    characters: {
        available: number;
        collectionURI: string;
        items: [
            {
                resourceURI: string;
                name: string;
            }
        ]
        returned: number;
    }
    stories: {
        available: number;
        returned: number;
        collectionURI: string,
        items: [
            {
                resourceURI: string,
                name: string,
                type: string
            }
        ]
    };
    comics: {
        available: number;
        returned: number;
        collectionURI: string,
        items: [
            {
                resourceURI: string,
                name: string
            }
        ]
    };
   returned: number;

}