import React, { Component } from 'react';
import { CardList } from './components/CardList';
import { robots } from './robots';
import { SearchBox } from './components/SearchBox';
import './App.css';
import { Scroll } from './components/Scroll';

class App extends Component {
  state = {
    robots: [],
    searchField: ''
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(robots => {
        this.setState({ robots: robots });
      });
  }

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
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchField={this.state.searchField} searchChanged={this.onSearchChanged} />
        <Scroll>
          <CardList robots={this.state.robots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
