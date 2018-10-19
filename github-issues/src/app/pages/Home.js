import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import issues from '../../issues';

function Home({ sampleValue, increment }) {
  return (
    <div>
      <h1>Home: {sampleValue}</h1>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  );
}

Home.propTypes = {
  sampleValue: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
};

const enhance = connect(
  state => ({
    sampleValue: issues.selectors.getSample(state),
  }),
  dispatch =>
    bindActionCreators(
      {
        increment: issues.actions.sample,
      },
      dispatch
    )
);

export default enhance(Home);
