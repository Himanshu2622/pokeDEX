import React from "react";
import './card.styles.css';

export const Card = props => (
    <div className = 'card-container'>
        <img className = 'size'
            alt = 'pokemon'
            src = {require(`../images/${props.pokemon.id}.png`)}
        >
        </img>
        <h2>{props.pokemon.name.english}</h2>
        <p>{props.pokemon.type}</p>
    </div>
);