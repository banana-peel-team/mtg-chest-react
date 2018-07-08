import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, array } from 'prop-types';

import { getCollection } from '../actions/cardActions';

class CollectionPage extends Component {
  componentWillMount() {
    this.props.getCollection();
  }

  render() {
    return (
      <div>
        <p>Collection</p>
        <p>{this.props.collection}</p>
      </div>
    );
  }
}

CollectionPage.propTypes = {
  getCollection: func.isRequired,
  collection: array
};

const mapState = state => ({
  collection: state.getIn(['card', 'collection'])
});

const mapDispatch = dispatch => ({
  getCollection: () => dispatch(getCollection())
});

export default connect(mapState, mapDispatch)(CollectionPage);
