import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=4e4deb1960cc4572b411aab1ce77c8d7";
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({articles: parsedData.articles})
    }

    render() {
        return (
            <div className="container my-4">
                <h2 className='mb-3'>NewsMonkey - Top headlines</h2>
                <div className="row">
                    {this.state.articles.map((element)=>{
                        return <div className="col-md-3" key={element.url}>
                            <NewsItem title={element.title.slice(0, 40)} newsUrl={element.url} imgsrc={element.urlToImage} description={element.description.slice(0, 80)} />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}
