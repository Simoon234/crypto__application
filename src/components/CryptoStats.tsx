import millify from "millify";


//types
import {GlobalInterfaceStatistics} from '../types/Interfaces';

//style
import '../styles/crypto-stats.css';

export const CryptoStats = ({total, total24hVolume, totalCoins, totalExchanges, totalMarketCap, totalMarkets}: GlobalInterfaceStatistics) => {
    return (
        <div className='crypto__global-information'>
            <h1>Global Crypto Information</h1>
            <div className='crypto__global-information-details'>
                <p>Total: <span>{millify(total)}</span></p>
                <p>Total 24h Volume: <span>{millify(Number(total24hVolume))}</span></p>
                <p>Total Coins: <span>{millify(totalCoins)}</span></p>
                <p>Total Exchange: <span>{millify(Number(totalExchanges))}</span></p>
                <p>Total Market Cap: <span>{millify(Number(totalMarketCap))}</span></p>
                <p>Total Markets: <span>{millify(totalMarkets)}</span></p>
            </div>
        </div>
    )
}