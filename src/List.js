// List.js:
import React from 'react';
import './List.css';
import Card from './Card'
// The List component should render markup matching the design.html: a section with a class of 'List', containing a header and div with class 'List-cards'.
// The List component accepts 2 props: header and cards.
    // header is a string of the header of the card to render.
    // cards is an array of card objects. Each object should have a title and content.
    // These props will be passed in for each List from the App component.
// The List should render a Card component for each of the cards in the cards array prop.
// Each instance of the Card component should be passed 2 props (and a key). The 2 props are title and content.
    // The title prop is a string for the Card's title.
    // The content prop is a string of the Card's content.

export default function List(props){
    return(
        <section className="List">
            <header className="List-header">
                <h2>{props.header}</h2>
            </header>
            <div className="List-cards">
                {props.cards.map((card)=>
                <Card 
                key={card.id}
                title={card.title}
                content={card.content}
                />)}
                <button 
                    type="button" 
                    className="List-add-button"
                >
                    + Add Random Card
                </button>
            </div>
        </section>
    )
  }

