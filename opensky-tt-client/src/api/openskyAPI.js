import axios from "axios";

export function getDepartingFlights(airport, begin, end) {
	return axios
			.get(`https://opensky-network.org/api/flights/departure`, {
				params: {
					'airport': airport,
					'begin': begin,
					'end': end
				}
			});
}

export function getArrivalFlights(airport, begin, end) {
	return axios
			.get(`https://opensky-network.org/api/flights/arrival`, {
				params: {
					'airport': airport,
					'begin': begin,
					'end': end
				}
			});
}