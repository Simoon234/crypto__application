import {ChangeEvent, useEffect, useState} from "react";
import {Link} from "react-router-dom";

//local
import {CryptoApi, SingleCrypto} from "../components/SingleCrypto";
import {Loading} from "../components/Loading";
import {useGetCryptosQuery} from "../service/cryptoApi";
import {CryptoStats} from "../components/CryptoStats";

//types
import {GlobalInterfaceStatistics} from '../types/Interfaces';

//style
import '../styles/crypt.css'


export const Home = () => {
    const [limit, setLimit] = useState<number>(10);
    const [search, setSearch] = useState<string>('');
    const { data: cryptoData, isFetching } = useGetCryptosQuery(limit);
    const [crypto, setCryptos] = useState([]);

    const globalDetails: GlobalInterfaceStatistics  = cryptoData?.data?.stats;

    const onClickShowMoreCrypto = () => limit === 10 ? setLimit(100) : setLimit(10);

    useEffect(() => {
        const filteredData = cryptoData?.data?.coins.filter((item: CryptoApi) => item.name.toLowerCase().includes(search));

        setCryptos(filteredData);
    }, [cryptoData, search]);


    if(isFetching) return <Loading/>

    return (
        <section className='crypto__container'>
            <CryptoStats total={globalDetails.total} totalExchanges={globalDetails.totalExchanges} total24hVolume={globalDetails.total24hVolume} totalCoins={globalDetails.totalCoins} totalMarketCap={globalDetails.totalMarketCap} totalMarkets={globalDetails.totalMarkets}/>
            <h2>Cryptos</h2>
            <div className='crypto__header'>
                {limit === 10 ? '' : <input value={search} onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} type="text" placeholder='Search for coins...'/>}
                <button onClick={onClickShowMoreCrypto}>{limit === 10 ? "Show more" : "Show less"}</button>
            </div>
            <div className='coin__section'>
                {crypto?.map((item: CryptoApi) => (
                    <Link key={item.uuid} to={`/crypto/${item.uuid}`}>
                        <SingleCrypto uuid={item.uuid} key={item.uuid} price={item.price} change={item.change} iconUrl={item.iconUrl} name={item.name} rank={item.rank} marketCap={item.marketCap}/>
                    </Link>
                ))}
            </div>
        </section>
    )
}