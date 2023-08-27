import React from 'react';
import './card-list.styles.css';

import {Card} from '../card/card.component.jsx';

export const CardList = props => (
    <div className = 'card-list'>
        {props.pokemon.map(pokemon => (
        <Card key={pokemon.id} pokemon={pokemon} />
       ))}
    </div>
);