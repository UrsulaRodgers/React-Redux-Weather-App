import React, { Component } from 'react';
import './App.css';
import SearchBar from './containers/searchbar';
import CityWeatherList from './containers/city_weather_list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <CityWeatherList />
      </div>
    );
  }
}

export default App;
