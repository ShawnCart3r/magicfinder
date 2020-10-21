import React from 'react';
import Titles from './component/Titles';
import Form from './component/Form';
import Card from './component/card';

class App extends React.Component {
  state = {
    name: undefined,
    mana_cost: undefined,
    image: undefined,
    oracle_text: undefined,
    error: undefined
  }

  getCard = async (e) => {
    e.preventDefault();
    const cardName = e.target.elements.cardName.value;
    const api_call = await fetch(`https://api.scryfall.com/cards/named?fuzzy=${cardName}`);
    const data = await api_call.json();
    if (cardName) {
      console.log(data);
      this.setState({
        name: data.name,
        mana_cost: data.mana_cost,
        image: data.image_uris.normal,
        oracle_text: data.oracle_text,
        error: ""
       });
    } else {
      this.setState({
        name: undefined,
        mana_cost: undefined,
        image: undefined,
        oracle_text: undefined,
        error: 'Please enter a card name. Try being more descriptive. Instead of "jace" try "jace, the mind"'
       });
    }
  }
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-md-5 title-container">
                  <Titles />
                </div>
                <div className="col-md-7 form-container">
                <Form getCard={this.getCard}/>
                <Card
                  name={this.state.name}
                  mana_cost={this.state.mana_cost}
                  image = {this.state.image}
                  oracle_text = {this.state.oracle_text}
                  error = {this.state.error}
                />    
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;