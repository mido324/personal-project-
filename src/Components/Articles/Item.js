import React, { Component } from 'react';
import axios from 'axios'
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
console.log(this.state.articles);
      var article = this.state.articles.map((elm) => {
          
        return ( <div>
        <p>
        {elm.title}
        </p>
        {console.log(elm.title)}
        </div> ) 

      })
      console.log(article);
        
    //   })
        return (
            <div>
            <h2>this is the item </h2>
            {article}
            </div>
        );
    }
}

export default Item;