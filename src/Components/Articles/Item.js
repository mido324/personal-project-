import React, { Component } from 'react';
import axios from 'axios'
import {Button} from 'reactstrap';

class Item extends Component {
    constructor() {
        super() 
        this.state = {
            articles: []
        }
    }
    componentDidMount() {
axios.get(`https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=38958fd7fa674b78b5c6839b55ba6ab8`).then((res) => {
    console.log(res);
    this.setState({
        articles: res.data.articles 
    })
})
    }
    

    render() {

      const article = this.state.articles.map((elm) => {
          
        return ( <div>
        <article>
        {elm.title}
        </article>
        
        
        </div> ) 

      })
      console.log(article);
        
    //   })
        return (
            <div>
            <h2>News Headline </h2>
             {article} 
            
            
            </div>
        );
    }
}

export default Item;