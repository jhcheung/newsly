import React from 'react';
import logo from './logo.svg';
import './App.css';
import articles from './articles'
import ArticleCard from './ArticleCard'
import ArticleItem from './ArticleItem'


class App extends React.Component {

  state = {
    articles: articles,
    listOrCard: "Card",
    lightOrDark: "Light"
  }

  renderArticles = () => {
    return this.state.articles.map(article => {
      return <ArticleCard 
              key={article.id} 
              title={article.title}
              url={article.url}
              urlToImage={article.urlToImage}
              description={article.description}
              lightOrDark={this.state.lightOrDark.toLowerCase()}
              />
    })
  }

  handleListClick = () =>{
    this.setState({
      listOrCard: (this.state.listOrCard === "Card") ? "List" : "Card"
    })
  }

  handleLightClick = () =>{
    this.setState({
      lightOrDark: (this.state.lightOrDark === "Light") ? "Dark" : "Light"
    })
  }

  render(){
    // console.log(this.state.listOrCard.toLowerCase())
    return (
      <div className={this.state.lightOrDark.toLowerCase()}>
        <button onClick={this.handleLightClick}>Switch to {this.state.lightOrDark === "Light" ? "Dark" : "Light"} Mode</button>
        <button onClick={this.handleListClick}>Switch to {this.state.listOrCard === "Card" ? "List" : "Card"} View</button>
        <div className={`${this.state.listOrCard.toLowerCase()}s`}>
          {this.renderArticles()}
        </div>
      </div>
    );
  }
}

export default App;
