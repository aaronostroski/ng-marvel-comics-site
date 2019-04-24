export interface Comics {

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

export interface Results {

    id: number;
    digitalId: number;
    title: string;
    issueNumber: number;
    variantDescription?: string;
    description: string;
    modified: string;
    isbn: string;
    upc: string;
    diamondCode?: string;
    ean?: string;
    issn?: string;
    format: string;
    pageCount: number;
    textObjects: [
        {
            type: string;
            language: string;
            text: string;
        }
    ];
    resouceURI: string;
    urls: [
        {
            type: string;
            url: string;
        }
    ]
    series: {
        resourceURI: string;
        name: string;
    }
    variants: [];
    collections: [];
    collectedIssues: [
        {
            resourceURI: string;
            name: string;
        }
    ]
    dates: [
        {
            type: string;
            date: string;
        }
    ]
    prices: [
        {
            type: string;
            price: number;
        }
    ]
    thumbnail:{
        path: string;
        extension: string;
    }
    images: [
        {
            path: string;
            extension: string;
        }
    ]
    creators: {
        available: number;
        collectionURI: string;
        items: [
            {
                resourceURI: string;
                name: string;
                role: string;
            }
        ]
    }
    returned: number;

}