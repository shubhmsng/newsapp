import React, { useState, useEffect } from 'react';
import Cards from './Cards';
import Categories from './Categories';
import Loader from './Loader';
import './App.css';

const API_KEY = '3045f8ea87e742488ad5074cb446af40';
const categories = ['bitcoin', 'u.s.a', 'apple', 'techcrunch', 'wall street journal'];
let newsCache = {};

const today = new Date().toJSON().split('T')[0]
let yesterday = today.split('-');
yesterday[2] = --yesterday[2];
yesterday = yesterday.join('-');

function App() {
  const [ selectedCategory, setSelectedCategory ] = useState(categories[0]);
  const [ articles, setArticles ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);

  const changeCategory = (event) => {
    event.preventDefault();
      if(event.target.value) {
        setSelectedCategory(event.target.value);
    }
  }

  useEffect(() => {
    if(!newsCache[selectedCategory]) {
      setIsLoading(true);
      fetch(`https://newsapi.org/v2/everything?q=${selectedCategory}&from=${yesterday}&to=${today}&sortBy=popularity&apiKey=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        newsCache[selectedCategory] = data;
        setArticles(newsCache[selectedCategory]?.articles);
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
        console.error(error);
      });
    } else {
      setArticles(newsCache[selectedCategory]?.articles);
    }
  }, [selectedCategory])

  return (
    <div className="app-container">
      <Categories 
        selectedCategory={selectedCategory} 
        categories={categories}
        changeCategory={changeCategory}/>
      <Cards articles={articles}/>
      <Loader isLoading={isLoading} />
    </div>
  );
}

export default App;
