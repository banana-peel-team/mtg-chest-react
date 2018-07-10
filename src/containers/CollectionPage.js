import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { func, object, bool } from 'prop-types';

import { getCollection } from '../actions/cardActions';
import Loading from '../components/common/Loading';
import CardList from '../components/cards/CardList';

class CollectionPage extends Component {
  componentWillMount() {
    this.props.getCollection();
  }

  render() {
    const { loading, collection } = this.props;
    if (loading) return (<Loading />);
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Card Count</th>
            <th>Card Type</th>
            <th>Card Text</th>
            <th>Power</th>
            <th>Toughness</th>
            <th>Mana Cost</th>
          </tr>
        </thead>
        { !_.isEmpty(collection) ?
          <CardList cards={collection.cards} /> :
          <tbody>
            <tr>
              <td>No cards yet</td>
            </tr>
          </tbody>
        }
      </table>
    );
  }
}

CollectionPage.propTypes = {
  getCollection: func.isRequired,
  collection: object,
  loading: bool
};

const mapState = state => ({
  collection: state.getIn(['card', 'collection']).toJS(),
  loading: state.getIn(['card', 'loading'])
});

const mapDispatch = dispatch => ({
  getCollection: () => dispatch(getCollection())
});

export default connect(mapState, mapDispatch)(CollectionPage);
