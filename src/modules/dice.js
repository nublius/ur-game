const Dice = (function Die() {
	let die = [0, 0, 0, 0];

	const roll = () => {
		return die.reduce((sum) => {
			return sum + Math.round(Math.random());
		}, 0);
	};

	return { roll };
})();

