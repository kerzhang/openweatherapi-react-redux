import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityDate) {
    const temps = cityDate.list.map(weather => weather.main.temp);
    const humidities = cityDate.list.map(weather => weather.main.humidity);
    const pressures = cityDate.list.map(weather => weather.main.pressure);

    return (
      <tr key={cityDate.city.name}>
        <td>{cityDate.city.name}</td>
        <td>
          <Chart data={temps} color="orange" units='K'/>
        </td>
        <td>
          <Chart data={humidities} color="red" units='%'/>
        </td>
        <td>
          <Chart data={pressures} color="blue" units='hPa'/>
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover align-text-bottom">
        <thead>
          <tr>
            <th>城市</th>
            <th>气温</th>
            <th>气压</th>
            <th>湿度</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

// function mapStateToProps(state) {
// const weather = state.weather;
function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
