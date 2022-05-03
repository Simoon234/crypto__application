import React from 'react';
import parser from 'html-react-parser';
import {useParams} from "react-router-dom";
import millify from "millify";

//local
import {useGetCryptoDetailsQuery} from "../service/cryptoApi";
import {Loading} from "../components/Loading";
import {Details} from "../types/Interfaces";

//styles
import '../styles/crypto-details.css';


export const CryptoDetails = () => {
    const {id} = useParams();
    const {data, isFetching} = useGetCryptoDetailsQuery(id);
    const singleData: Details = data?.data?.coin;

    if(isFetching) return <Loading/>

    console.log(data)

    return (
        <section className='crypto__details'>
            <h3>{singleData.name} <span>details</span></h3>
            <hr/>
            <div className='crypto__details-container'>
                <div className='crypto__details-statistics'>
                    <h4>{singleData.name} General Statistics:</h4>
                    <p>💰 Price: <span>${millify(Number(singleData.price))}</span></p>
                    <hr/>
                    <p>24h Volume: <span>${millify(Number(singleData['24hVolume']))}</span></p>
                    <hr/>
                    <p>Market Cap: <span>${millify(Number(singleData.marketCap))}</span></p>
                    <hr/>
                    <p>Daily avg: <span>${millify(Number(singleData.allTimeHigh.price))}</span></p>
                    <hr/>
                    <p>Rank: <span>{singleData.rank}</span></p>
                </div>
                <div className='crypto__details-statistics'>
                    <h4>Other Statistics:</h4>
                    <p>Number of Markets: <span>{singleData.numberOfMarkets}</span></p>
                    <hr/>
                    <p>Number of Exchanges: <span>{singleData.numberOfExchanges}</span></p>
                    <hr/>
                    <p>Total Supply: <span>{millify(Number(singleData.supply.total))}</span></p>
                    <hr/>
                    <p>Approved: <span>{singleData.supply.confirmed ? '👍' : '👎'}</span></p>
                    <hr/>
                    <p>Circulating Supply: <span>{millify(Number(singleData.supply.circulating))}</span></p>
                </div>
            </div>
            <div className='crypto__details-information'>
                <h4>What's exactly is {singleData.name}?</h4>
                {parser(singleData.description)}
            </div>
            <div className='crypto__details-links'>
                <h4>{singleData.name} links</h4>
                    {singleData.links.map((item, i: number) =>
                        <div className='links' key={i}>
                            <p>{i + 1}: {item.name}</p>
                            <p><a href={item.url}>{item.type}</a></p>
                        </div>
                    )}
            </div>
        </section>
    )
}