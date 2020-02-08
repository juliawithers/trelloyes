// App.js:

// The App component should render markup matching the design.html: the main element, a header with the h1 and a div with class 'App-list'.
  // The App component will accept 1 prop, store.
    // The store prop is an object with 2 keys: lists and allCards.
    // lists is an array of objects.
    // allCards is an object where each key is a card's ID and the value is the card object with a title and content.
    // You'll be given a dummy STORE object to pass to your App.
// The App should render a List component for each of the items in the store.lists array.
// Each instance of the List component should be passed 2 props (and a key). The 2 props are header and cards.
  // The header prop is a string for the List's header.
  // The cards prop will be an array of card objects.
  // You'll need to combine the cardIds array for the list with the allCards object.


import React, { Component } from 'react'
import './App.css'
import List from './List'
import STORE from './STORE'

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
        key === keyToOmit ? newObj : {...newObj, [key]: value},
    {}
  );
}

class App extends Component{
  // Why is it necessary to have this defaultProps set?
  state = {
    store: STORE,
  };
  
  handleDeleteCard = (listId,cardId) => {
    // delete the card form cardIds in all cardIds
    console.log(listId,cardId)
    const newLists = this.state.store.lists.map(list =>({
      ...list,
      cardIds: list.cardIds.filter(cardIdent =>
        cardIdent !== cardId)
    }));

    
    const newCards = omit(this.state.store.allCards,cardId)
    this.setState({
      store:{
        lists: newLists,
        allCards: newCards
      }
    })

  }

  handleAddCard = (listId) => {
    console.log(this.state.store)
    // add a card
    const newCard = newRandomCard()
    console.log(newCard)
    // add card to allcards and to the card id's
    const newLists = this.state.store.lists.map(list => {
      if(list.id === listId){
        return{
          ...list,
          cardIds: [...list.cardIds, newCard.id]
        };   
      }
      return list;
    })
    // const newCardObject = [...this.state.store.allCards,newCard.id: newCard]
    this.setState({
      store:{
        lists: newLists,
        allCards: {
          ...this.state.store.allCards,
          [newCard.id]: newCard
        }
      }
    })
  }
  render () {
    const { store } = this.state
    return (
    <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List 
              onDeleteCard = {this.handleDeleteCard}
              onAddCard = {this.handleAddCard}
              key={list.id}
              listId = {list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
              />
          ))}
        </div>
    </main>
    );
  }
}


export default App;