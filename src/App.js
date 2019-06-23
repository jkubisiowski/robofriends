import React, { Component } from 'react';
import { CardList } from './CardList';
import { robots } from './robots';
import { SearchBox } from './SearchBox';

class App extends Component {
  state = {
    robots: robots,
    searchField: ''
  };

  onSearchChanged = event => {
    const filteredRobots = robots.filter(x => {
      return x.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });
    this.setState({
      robots: filteredRobots,
      searchField: event.target.value
    });
  };

  render() {
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchField={this.state.searchField} searchChanged={this.onSearchChanged} />
        <CardList robots={this.state.robots} />
      </div>
    );
  }
}

export default App;
