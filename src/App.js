import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Gift from './components/gift';
import { max_number } from './helpers';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifts: [],
    }
  }

  addGift = () => {
    const { gifts } = this.state;
    const ids = this.state.gifts.map(gift => gift.id);

    gifts.push({
      id: max_number(ids) + 1,
    });

    this.setState(gifts: gifts);
  }

  removeGift = id => {
    const gifts = this.state.gifts.filter(gift => gift.id != id );

    this.setState({gifts})
  }

  giftList = () => {
    return (
      <section className="gift-list">
      {
        this.state.gifts.map(gift => {
          return (
            <Gift
              key={gift.id}
              gift={gift}
              removeGift={this.removeGift}
            />
          )
        })
      }
      </section>
    );
  }


  render() {
    return (
      <div className="App">
        <header><h2>Gift Giver</h2></header>
        <main>
          <Button className="btn-add" onClick={this.addGift} >Add Gift</Button>
          {this.giftList()}
        </main>
      </div>
    );
  }
}

export default App;
