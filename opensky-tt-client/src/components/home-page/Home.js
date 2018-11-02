import React, {Component} from 'react';
import axios from "axios";
import getTime from ""
class Home extends Component {
	constructor(props){
		super(props);
		this.state = {
			airports: [
				{
					'name': 'Hartsfield–Jackson Atlanta International Airport',
					'Location': 'Atlanta, Georgia',
					'Country': 'United States',
					'ICAO': 'KATL'
				},
				{
					'name': 'Beijing Capital International Airport',
					'Location': 'Chaoyang-Shunyi, Beijing',
					'Country': 'China',
					'ICAO': 'ZBAA'
				},
				{
					'name': 'Hartsfield–Jackson Atlanta International Airport',
					'Location': 'Atlanta, Georgia',
					'Country': 'United States',
					'ICAO': 'KATL'
				},
				{
					'name': 'Hartsfield–Jackson Atlanta International Airport',
					'Location': 'Atlanta, Georgia',
					'Country': 'United States',
					'ICAO': 'KATL'
				},
				{
					'name': 'Hartsfield–Jackson Atlanta International Airport',
					'Location': 'Atlanta, Georgia',
					'Country': 'United States',
					'ICAO': 'KATL'
				},
			]
		}
	}

	componentDidMount(){
		// this.getDepartingFlights();
		// this.getArivialFlights();
	}



	render() {
		return (
			<main>
				<div className="container">
					<div className="profiles">
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
										<tr>
											<th scope="row">1</th>
											<td>Hartsfield–Jackson Atlanta International Airport</td>
											<td>Atlanta, Georgia</td>
											<td>United States</td>
											<td>KATL</td>
										</tr>
										<tr>
											<th scope="row">2</th>
											<td>Jacob</td>
											<td>Thornton</td>
											<td>@fat</td>
										</tr>
										<tr>
											<th scope="row">3</th>
											<td>Larry</td>
											<td>the Bird</td>
											<td>@twitter</td>
										</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		);
	}
}

export default Home;