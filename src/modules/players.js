class Player {
	#name; // Private field
	#tokenArray = [];
	#diceRoll = 0;

	constructor(name) {
		this.#name = name;
	}

	get name() {
		return this.#name;
	}

	set diceRoll(score) {
		this.#diceRoll = score;
	}

	get diceRoll() {
		return this.#diceRoll;
	}

	initTokens(value) {
		this.#tokenArray = [];
		for (let i = 0; i < 7; i++) {
			const id = `${value}${i + 1}`;
			const newToken = new Token(this.#name, id);
			this.#tokenArray.push(newToken);
		}
	}

	resetTokens() {
		for (let i = 0; i < this.#tokenArray.length; i++) {
			this.#tokenArray[i].reset();
		}
	}

	getAvailableTokens() {
		return this.#tokenArray.filter(token => !token.hasExited);
	}
};
