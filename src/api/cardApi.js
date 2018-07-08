import api from './apiService';

class Card {
  static getCollection() {
    return api.get('/collection');
  }
}

export default Card;
