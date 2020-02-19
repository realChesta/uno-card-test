import React from 'react';
import {animated, Transition} from 'react-spring/renderprops';
import './App.css';

import Card from './components/Card';

// standard playing card size:
// 62mm x 82mm

class CardList extends React.Component {
    render() {
        return (
            <div className="card-list">
                <Transition
                    items={this.props.cards}
                    keys={item => item.key}
                    unique={true}
                    from={{
                        marginRight: 0,
                        marginLeft: 0,
                        width: 0,
                        opacity: 0,
                        transform: 'translateY(100%) rotate(180deg)'
                    }}
                    enter={{
                        marginRight: 15,
                        marginLeft: 15,
                        width: 'auto',
                        opacity: 1,
                        transform: 'translateY(0%) rotate(0deg)'
                    }}
                    leave={{
                        marginRight: 0,
                        marginLeft: 0,
                        width: 0,
                        opacity: 0,
                        transform: 'translateY(-100%) rotate(180deg)'
                    }}
                    trail={200}>
                    {item => styles => {
                        return (
                            <animated.div className='card-overlay-container'
                                          style={{...styles}}
                                          onClick={() => this.props.onClick(item)}
                                          key={'container-' + item.key}>
                                {item}
                            </animated.div>
                        );
                    }}
                </Transition>
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);

        const cards = [];
        const amount = 4;

        for (let i = 0; i < amount; i++) {
            cards.push(this.createCard(i));
        }

        this.state = {cards: cards};
    }

    replaceCard(card) {
        let index = this.state.cards.indexOf(card);
        if (index !== -1) {
            let newCards = this.state.cards.slice(0);
            newCards.splice(index, 1);
            newCards.splice(index, 0, this.createCard(Math.floor(Math.random() * 10).toString()));
            this.setState({cards: newCards});
        }
    }

    createCard(i) {
        const types = ["number", "number", "number", "skip", "reverse", "+2", "choose", "+4"];
        const colors = ["red", "green", "blue", "yellow"];

        let chosenType = types[Math.floor(Math.random() * types.length)];
        let chosenColor = colors[Math.floor(Math.random() * colors.length)];

        if (chosenType === "number") {
            chosenType = Math.floor(Math.random() * 10).toString();
        }

        return (
            <Card number={chosenType} color={chosenColor} key={i + chosenType + chosenColor}/>
        );
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="App-window">
                        <p className="App-title">
                            Uno Card Prototypes
                        </p>
                        <p className="App-description">
                            This is a quick design test based on the work of <a target="_blank"
                                                                                href="https://www.behance.net/gallery/90273937/UNO-Versao-Minimalista">
                            Warleson Oliveira.
                        </a>
                            <br/>
                            All cards are made using HTML and CSS, but stitched together with react.js.
                            <br/><br/>
                            Click on a card to switch it replace it with a new random card!
                        </p>
                        <CardList
                            cards={this.state.cards}
                            onClick={card => this.replaceCard(card)}
                        />
                    </div>
                </header>
            </div>
        );
    }
}

export default App;
