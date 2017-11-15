import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Data from '../components/data';
import GoogleMap from '../components/google_map';

class CityWeatherList extends Component {

	renderWeather(cityData) {
		const cityName = cityData.city.name;
		const cityTemp = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273);
		const cityPressure =  cityData.list.map(weather => weather.main.pressure);
		const cityHumidity =  cityData.list.map(weather => weather.main.humidity);
		const { lon, lat } =  cityData.city.coord;
		
		return (
			<tr key={cityName}>
				<td><GoogleMap lon={lon} lat={lat} /></td>
				<td><Data data={cityTemp} color="orange" units="C"/></td>
				<td><Data data={cityPressure} color="blue" units="hPa" /></td>
				<td><Data data={cityHumidity} color="red" units="%"/></td>
			</tr>
		);
	}
	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (C)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>

		)
	}
}

function mapStateToProps(state) {
	return {weather: state.weather} /*state.weather because we defined this as such in the reducers/index.js file */
}

export default connect (mapStateToProps)(CityWeatherList);