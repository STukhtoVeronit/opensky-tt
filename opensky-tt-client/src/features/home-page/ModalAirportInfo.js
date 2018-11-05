import React, {Component} from 'react';
import Modal from "react-responsive-modal";
import Spinner from "../../components/common/spinner/Spinner";

class ModalAirportInfo extends Component {
	render() {

		return (
				<Modal open={this.props.open} onClose={this.props.onClose} center>

					<div className="w-75">
						<h2>Departing Flights in</h2>
						<select value={this.props.departingTime} onChange={(value) => this.props.onChangeDepartingTime(value)}>
							<option value="20">20</option>
							<option value="40">40</option>
							<option value="60">60</option>
							<option value="180">180</option>
						</select>
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
										<tr className='table-row' key={index}>
											<th scope="row">{index + 1}</th>
											<td>{flight.callsign}</td>
											<td>{new Date(flight.firstSeen*1000).toLocaleString()}</td>
											<td>{flight.estDepartureAirportHorizDistance}</td>
											<td>{flight.estDepartureAirportVertDistance}</td>
										</tr>
								))
							}
							</tbody>
						</table>
						{(this.props.departingLoading ? <Spinner/> : null)}

						<h2>Arrival Flights in</h2>
						<select value={this.props.arrivalTime} onChange={(value) => this.props.onChangeArrivalTime(value)}>
							<option value="20">20</option>
							<option value="40">40</option>
							<option value="60">60</option>
							<option value="180">180</option>
						</select>
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
										<tr className='table-row' key={index}>
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
						{(this.props.arrivalLoading ? <Spinner/> : null)}
					</div>

				</Modal>
		);
	}
}

export default ModalAirportInfo;