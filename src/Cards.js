import React from 'react';

const Cards = ({ articles }) => {
    return (
        <div className="article-container">
            { articles && articles.length > 0 && articles.map((article, index) => 
                <div 
                    key={ article?.author + index }
                    className="article">
                    <div>
                        <img 
                            className="image" 
                            src={article?.urlToImage ?? "/default.jpg"} 
                            alt="news_image"/>
                    </div>
                    <div className="article-body">
                        <div className="article-header">
                            {article?.description?.substr(0, 50) + "..."}
                        </div>
                        <div className="article-content">
                            {article?.content?.substr(0, 100) + "..."}
                        </div>
                    </div>
                    <div className="footer">
                        <div className="author">{article?.author}</div>
                        <div className="more-container">
                            <div className="date">{article?.publishedAt}</div>
                            <div className="more">
                                <a 
                                    href={article.url ?? "#"}
                                    target="_blank"
                                    rel="noreferrer" >more...</a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default React.memo(Cards);