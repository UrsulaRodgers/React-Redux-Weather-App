import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMap from '../components/google_map';

class CityWeatherList extends Component {

	renderWeather(cityData) {
		const cityName = cityData.city.name;
		{/*const cityTemp = cityData.list.map(weather => weather.main.temp);*/}
		const cityTemp = cityData.list[0].main.temp;
		const cityPressure = cityData.list[0].main.pressure;
		const cityHumidity = cityData.list[0].main.humidity;
		
		return (
			<tr key={cityName}>
				<td>{cityName}</td>
				<td>
					{cityTemp}
				</td>
				<td>
					{cityPressure}
				</td>
				<td>
					{cityHumidity}
				</td>
			</tr>
		);
	}
	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
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