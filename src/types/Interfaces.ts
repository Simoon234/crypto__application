export interface Details {
    name: string;
    rank: number;
    tier: number;
    price: string | number;
    ['24hVolume']: string | number;
    marketCap: string;
    allTimeHigh: Avg;
    numberOfMarkets: number;
    numberOfExchanges: number;
    supply: Total;
    description: string;
    links: Links[];
}

interface Avg {
    price: string;
}

interface Links {
    name: string;
    url: string;
    type: string;
}

interface Total {
    total: string;
    confirmed: boolean;
    circulating: string;
}

export interface NewsInterface {
    name: string;
    image: any;
    url: string;
    description: string | number;
    datePublished: string;
}

export interface GlobalInterfaceStatistics {
    total: number;
    totalExchanges: string;
    total24hVolume: string;
    totalCoins: number;
    totalMarketCap: string;
    totalMarkets: number;

}