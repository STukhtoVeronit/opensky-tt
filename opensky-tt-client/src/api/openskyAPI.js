import axios from "axios";

export function getDepartingFlights(data = {'airport': 'RJTT', 'begin': 1541137339, 'end': 1541148069}) {
	return new Promise((resolve, reject) => {
		axios
			.get(`https://opensky-network.org/api/flights/departure?airport=RJTT&begin=1541137339&end=1541148069`)
			.then(res => console.dir(res))
			.catch(err => console.dir(err))
	});
}
export function getArivialFlights(params = {'airport': 'RJTT', 'begin': , 'end': 1541148069}) {
	return new Promise((resolve, reject) => {
		axios
			.get(`https://opensky-network.org/api/flights/arrival`, {params})
			.then(res => console.dir(res))
			.catch(err => console.dir(err))
	});
}