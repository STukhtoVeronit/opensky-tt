const getTimeInSeconds = (minuts = 0) => {
	return parseInt(new Date().getTime() / 1000 + minuts * 60);
};
export default getTimeInSeconds;