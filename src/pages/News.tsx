import {useState} from "react";
import moment from 'moment';

//local
import {Loading} from "../components/Loading";
import {useGetNewsQuery} from '../service/newsApi';
import {useGetCryptosQuery} from "../service/cryptoApi";
import {CryptoApi} from "../components/SingleCrypto";
import {NewsInterface} from '../types/Interfaces';

//style
import '../styles/news.css';



export const News = () => {
    const [limit, setLimit] = useState<number>(10);
    const [newsCategory, setNews] = useState<string>('Cryptocurrency');
    const {data} = useGetNewsQuery({newsCategory, count: limit});
    const {data: cryptoData} = useGetCryptosQuery(100);


    const onClickShowMoreNews = () => limit === 10 ? setLimit(100) : setLimit(10);

    if(!data?.value) return <Loading/>

    return (
        <section className='news__container'>
            <h2>News</h2>
            <div className='news__header'>
                <select name="news" id="news" onChange={(e) => setNews(e.target.value)}>
                    <option value='Cryptocurrency'>Cryptocurrency</option>
                    {cryptoData?.data?.coins.map((i: CryptoApi) => <option value={i.name}>{i.name}</option>)}
                </select>
                <button className='news__button' onClick={onClickShowMoreNews}>{limit === 10 ? "Show more" : "Show less"}</button>
            </div>
            <div className='news__section'>
                {data.value.map((news: NewsInterface, i: number) => (
                    <div key={i} className='news__box'>
                        <a href={news.url}>
                            <div className='news-image-container'>
                                <p className='news__title'>{news.name}</p>
                                <img src={news?.image?.thumbnail?.contentUrl} alt={news.name}/>
                            </div>
                            <p className='description'>
                                {news.description > 100 ? `${(typeof news.description === "string" ? news.description?.substring(0, 50) : '')}...` : news.description}
                            </p>
                            <div className='news__published'>
                                <p>{moment(news.datePublished).fromNow()}</p>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </section>

    )
}
