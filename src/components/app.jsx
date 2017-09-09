/*jshint esversion: 6 */

import React, { Component } from 'react';

import SearchBar from '../container/searchbar';
import WeatherList from '../container/weather_list';


export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
