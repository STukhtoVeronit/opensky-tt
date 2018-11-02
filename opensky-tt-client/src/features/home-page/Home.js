import React, {Component} from 'react';
import {getDepartingFlights, getArrivalFlights} from "../../api/openskyAPI";
import getTimeInSeconds from "../../utils/getTimeInSeconds";

import ModalAirportInfo from "./ModalAirportInfo";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			arrivalFlights: [],
			arrivalErrors: '',
			arrivalTime: 60,
			arrivalLoading: false,

			departingFlights: [],
			departingErrors: '',
			departingTime: 60,
			departingLoading: false,

			showModal: false,
			ICAO: null,
			airports: [
				{
					'Name': 'Hartsfield–Jackson Atlanta International Airport',
					'Location': 'Atlanta, Georgia',
					'Country': 'United States',
					'ICAO': 'KATL'
				},
				{
					'Name': 'Beijing Capital International Airport',
					'Location': 'Chaoyang-Shunyi, Beijing',
					'Country': 'China',
					'ICAO': 'ZBAA'
				},
				{
					'Name': 'Dubai International Airport',
					'Location': 'Garhoud, Dubai',
					'Country': 'United Arab Emirates',
					'ICAO': 'OMDB'
				},
				{
					'Name': 'Tokyo Haneda Airport',
					'Location': 'Ōta, Tokyo',
					'Country': 'Japan',
					'ICAO': 'RJTT'
				},
				{
					'Name': 'Los Angeles International Airport',
					'Location': 'Los Angeles, California',
					'Country': 'United States',
					'ICAO': 'KLAX'
				},
				{
					'Name': 'O\'Hare International Airport',
					'Location': 'Chicago, Illinois',
					'Country': 'United States',
					'ICAO': 'KORD'
				},
				{
					'Name': 'London Heathrow Airport',
					'Location': 'Hillingdon, London',
					'Country': 'United Kingdom',
					'ICAO': 'EGLL'
				},
				{
					'Name': 'Hong Kong International Airport',
					'Location': 'Chek Lap Kok, Hong Kong',
					'Country': 'Hong Kong SAR, China',
					'ICAO': 'VHHH'
				},
				{
					'Name': 'Shanghai Pudong International Airport',
					'Location': 'Pudong, Shanghai',
					'Country': 'China',
					'ICAO': 'ZSPD'
				},
				{
					'Name': 'Paris-Charles de Gaulle Airport',
					'Location': 'Roissy-en-France, Île-de-France',
					'Country': 'France',
					'ICAO': 'LFPG'
				}
			]
		}
	}

	onArrivalTimeChange = (value) => {
		this.setState({'arrivalTime': value});
		this.showModal();
	};

	onDepartingTimeChange = (value) => {
		this.setState({'departingTime': value});
		this.showModal();
	};

	onAirportClick = (ICAO) => {
		this.setState({'ICAO': ICAO});
		this.showModal(ICAO);
	};

	onOpenModal = () => {
		this.setState({showModal: true});
	};

	onCloseModal = () => {
		this.setState({showModal: false});
	};

	showModal = (ICAO = this.state.ICAO) => {
		this.setState({'arrivalLoading': true, 'departingLoading': true});
		this.setState({'departingFlights': [], 'arrivalFlights': []});

		getDepartingFlights(ICAO, getTimeInSeconds(-this.state.departingTime), getTimeInSeconds())
				.then(response => this.setState({'departingFlights': response.data}))
				.catch(err => this.setState({'departingErrors': err.data}))
				.finally(() => this.setState({'departingLoading': false}));

		getArrivalFlights(ICAO, getTimeInSeconds(-this.state.departingTime), getTimeInSeconds())
				.then(response => this.setState({'arrivalFlights': response.data}))
				.catch(err => this.setState({'arrivalErrors': err.data}))
				.finally(() => this.setState({'arrivalLoading': false}));

		this.onOpenModal();
	};

	render() {

		return (
				<main>
					<div className="container">

						<div className="row">
							<div className="col-md-12">
								<h2 className="display-4 text-center">Top 10 Airports</h2>

								<table className="table">
									<thead>
									<tr>
										<th scope="col">Rank</th>
										<th scope="col">Airport</th>
										<th scope="col">Location</th>
										<th scope="col">Country</th>
										<th scope="col">Code(ICAO)</th>
									</tr>
									</thead>
									<tbody>
									{this.state.airports.map((airport, index) => (
											<tr className='table-row' key={index} onClick={() => this.onAirportClick(airport.ICAO)}>
												<th scope="row">{index + 1}</th>
												<td>{airport.Name}</td>
												<td>{airport.Location}</td>
												<td>{airport.Country}</td>
												<td>{airport.ICAO}</td>
											</tr>
									))}
									</tbody>
								</table>

								<ModalAirportInfo
										open={this.state.showModal}
										onClose={this.onCloseModal}
										departingTime={this.state.departingTime}
										arrivalTime={this.state.arrivalTime}
										onChangeArrivalTime={(value) => this.onArrivalTimeChange(value) }
										onChangeDepartingTime={(value) => this.onDepartingTimeChange(value)}
										arrivalLoading={this.state.arrivalLoading}
										departingLoading={this.state.departingLoading}
										arrivalFlights={this.state.arrivalFlights}
										arrivalErrors={this.state.arrivalErrors}
										departingFlights={this.state.departingFlights}
										departingErrors={this.state.departingErrors}/>
							</div>
						</div>
					</div>
				</main>
		);
	}
}

export default Home;