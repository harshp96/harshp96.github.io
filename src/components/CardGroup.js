import { useState, useEffect, useContext } from "react";
import Card from "./Card";
import MyContext from '../context/MyContext';


export default function CardGroup() {
    const [context, setContext] = useContext(MyContext);
    const [news, setNews] = useState([]);
    useEffect(() => {
        // 'https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=9d051d37271c488298f3f42f75241c27'
        let url = 'https://newsapi.org/v2/top-headlines?country=' + context.country;
        if(context.category != ''){
            url += '&category=' + context.category;
        }
        url += '&apiKey=9d051d37271c488298f3f42f75241c27';
        console.log(url);
        fetch(url)
            .then(response => {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }

                // Examine the text in the response
                response.json().then(function (data) {
                    console.log(data.articles.length);
                    data.articles = data.articles.filter(item => item.urlToImage != null);
                    console.log(data.articles.length);
                    setNews(data.articles)
                });

                console.log(news)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [context]);

    const cardList = news.map((item, index) => (
        <Card key={index} item={item}></Card>
    ));

    return (
        <>
            <div className="card-columns">
                {cardList}
            </div>
        </>
    )
}

// 9d051d37271c488298f3f42f75241c27
// const [image, setimage] = useState([
//     "https://images.unsplash.com/photo-1591035897819-f4bdf739f446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//     "https://plus.unsplash.com/premium_photo-1685977494926-d1f8efd44c3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80",
//     "https://images.unsplash.com/photo-1588000127655-c6fbc013acd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//     "https://images.unsplash.com/photo-1581090570520-5b863f73be87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//     "https://images.unsplash.com/photo-1580829853878-747e56cd8637?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
// ])
