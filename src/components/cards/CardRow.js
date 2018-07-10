import React from 'react';
import { object } from 'prop-types';

const CardRow = ({ card }) => {
  const {
    cardName,
    cardCount,
    cardText,
    cardType,
    cardPower,
    cardToughness,
    cardManaCost
  } = card;
  return (
    <tr>
      <td>{cardName}</td>
      <td>{cardCount}</td>
      <td>{cardText}</td>
      <td>{cardType}</td>
      <td>{cardPower}</td>
      <td>{cardToughness}</td>
      <td>{cardManaCost}</td>
    </tr>
  );
};

CardRow.propTypes = {
  card: object.isRequired
};

export default CardRow;
