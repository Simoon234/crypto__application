import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";


const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Host': process.env.REACT_APP_NEWS_HOST,
    'X-RapidAPI-Key': process.env.REACT_APP_NEWS_KEY,
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';


const createRequest = (url: string) => ({
    url,
    headers: cryptoNewsHeaders
})

export const cryptoNews = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: builder => ({
        getNews: builder.query({
            query: ({
                        newsCategory,
                        count
                    }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})

export const {useGetNewsQuery} = cryptoNews;
