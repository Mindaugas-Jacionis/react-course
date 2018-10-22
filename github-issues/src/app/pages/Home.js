import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import issues from '../../issues';

class Home extends React.Component {
  componentDidMount() {
    const { fetchIssues } = this.props;
    fetchIssues();
  }

  render() {
    const { sampleValue, increment, issuesList } = this.props;
    console.log('Issues:', issuesList);

    return (
      <div>
        <h1>Home: {sampleValue}</h1>
        <button type="button" onClick={increment}>
          Increment
        </button>
      </div>
    );
  }
}

Home.propTypes = {
  sampleValue: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
};

const enhance = connect(
  state => ({
    sampleValue: issues.selectors.getSample(state),
    issuesList: state.issues.data,
  }),
  dispatch =>
    bindActionCreators(
      {
        increment: issues.actions.sample,
        fetchIssues: issues.actions.fetchIssues,
      },
      dispatch
    )
);

export default enhance(Home);
