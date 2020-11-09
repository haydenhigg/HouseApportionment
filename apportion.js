function apportion(pops, repNum = 435) {
	const geomean = (a, b) => Math.sqrt(a * b);

	let repNums = Object.keys(pops).map(k => [k, 1]);

	for (let repI = repNums.length; repI < repNum; repI++) {
		let priorities = repNums.map(r => [r[0], pops[r[0]] / geomean(r[1], r[1] + 1)]);
		priorities.sort((a, b) => b[1] - a[1]);

		let firstInQueue = priorities[0][0];
		for (let r in repNums)
			if (repNums[r][0] === firstInQueue)
				repNums[r][1]++;
	}

	repNums.sort((a, b) => b[1] - a[1]);

	return repNums;
}

function apportionNaive(pops, repNum = 435) {
	let repNums = Object.keys(pops).map(k => [k, 1]);
	repNums.sort((a, b) => pops[b[0]] - pops[a[0]]);

	for (let repI = repNums.length; repI < repNum; repI++) {
		repNums[0][1]++;

		// efficient re-sort
		for (let i = 1; i < repNums.length; i++)
			if (pops[repNums[i][0]] / repNums[i][1] > pops[repNums[0][0]] / repNums[0][1])
				repNums = [repNums[i]].concat(repNums.slice(1, i)).concat([repNums[0]]).concat(repNums.slice(i + 1, repNums.length));
	}

	repNums.sort((a, b) => b[1] - a[1]);

	return repNums;
}

let popData = JSON.parse(require('fs').readFileSync('./statePops.json').toString());

console.log(apportion(popData));
