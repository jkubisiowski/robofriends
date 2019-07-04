import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardList } from './components/CardList';
import { SearchBox } from './components/SearchBox';
import './App.css';
import { Scroll } from './components/Scroll';
import ErrorBoundry from './components/ErrorBoundry';
import { setSearchField, requestRobots } from './actions';
import Header from './components/Header';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChanged: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, onSearchChanged, robots, isPending } = this.props;
    const filteredRobots = robots.filter(x => {
      return x.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="tc">
        <Header />
        <SearchBox searchChanged={onSearchChanged} />
        {isPending && <h2>Loading...</h2>}
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
