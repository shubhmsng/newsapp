import React from 'react';

const Categorise = ({ categories, selectedCategory, changeCategory }) => {
    return (
        <header className="category-container">
            { categories.map(( category, index ) => 
                <div 
                    className="button-container" 
                    key={ category + index }>
                    <button 
                        id={ category + "-btn" } 
                        name={ category + "-btn" } 
                        className={ selectedCategory === category ? "btn active" : "btn" }
                        onClick={changeCategory}
                        value={category}>{ category.toUpperCase() }</button>
                </div>
              )
            }
        </header>
    );
}

export default React.memo(Categorise);