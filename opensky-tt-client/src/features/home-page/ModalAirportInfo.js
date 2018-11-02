import React, {Component} from 'react';
import Modal from "react-responsive-modal";

class ModalAirportInfo extends Component {
	render() {
		return (
				<Modal open={this.props.open} onClose={this.props.onClose} center>

					<div className="w-75">
						<h2>Departing Flights in</h2> <input type="number" value={this.props.departingTime} min={0} max={120} onChange={value => console.log(value)}/>
						<table className="table">
							<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">callsign</th>
								<th scope="col">firstSeen</th>
								<th scope="col">HorizDistance</th>
								<th scope="col">VertDistance</th>
							</tr>
							</thead>

							<tbody>
							{
								this.props.departingFlights.map((flight, index) => (
										<tr className='table-row' key={index} >
											<th scope="row">{index + 1}</th>
											<td>{flight.callsign}</td>
											<td>{flight.firstSeen}</td>
											<td>{flight.estDepartureAirportHorizDistance}</td>
											<td>{flight.estDepartureAirportVertDistance}</td>
										</tr>
								))
							}
							</tbody>

						</table>

						<h2>Arrival Flights in</h2> <input type="number" value={this.props.arrivalTime} min={0} max={120} onChange={value => this.setState({'arrivalTime': value})}/>
						<table className="table">
							<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">callsign</th>
								<th scope="col">firstSeen</th>
								<th scope="col">HorizDistance</th>
								<th scope="col">VertDistance</th>
							</tr>
							</thead>

							<tbody>
							{
								this.props.arrivalFlights.map((flight, index) => (
										<tr className='table-row' key={index} >
											<th scope="row">{index + 1}</th>
											<td>{flight.callsign}</td>
											<td>{flight.firstSeen}</td>
											<td>{flight.estDepartureAirportHorizDistance}</td>
											<td>{flight.estDepartureAirportVertDistance}</td>
										</tr>
								))
							}
							</tbody>

						</table>
					</div>

				</Modal>
		);
	}
}

export default ModalAirportInfo;