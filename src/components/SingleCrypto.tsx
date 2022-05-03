import millify from "millify";

export interface CryptoApi {
    rank: number;
    name: string;
    price: string;
    iconUrl: string;
    marketCap: string;
    change: string;
    uuid: string;
}

export const SingleCrypto = ({marketCap, iconUrl, name, price, rank, change}: CryptoApi) => {
    return (
        <div className='coin__box'>
            <div className='coin__header'>
                <p>{rank} | {name}</p>
                <img src={iconUrl} alt="crypto logo"/>
            </div>
            <div className='coin__info-details'>
                <p>Price: <span>${millify(Number(price))}</span></p>
                <p>Market Cap: <span>${millify(Number(marketCap))}</span></p>
                <p>Daily Change: <span>{change}</span></p>
            </div>
        </div>
    )
}