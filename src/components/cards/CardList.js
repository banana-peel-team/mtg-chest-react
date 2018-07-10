import React from 'react';
import _ from 'lodash';
import { array } from 'prop-types';

import CardRow from './CardRow';

const CardList = ({ cards }) => {
  const cardList = !_.isEmpty(cards) && cards.map((card, index) => (
    <CardRow
      card={card}
      key={`${card.cardId}${index}`}
    />
  ));
  return (
    <tbody>
      { cardList }
    </tbody>
  );
};

CardList.propTypes = {
  cards: array
};

export default CardList;
