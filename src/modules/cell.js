class Cell {
	#occupant = null; // Private field

	constructor(index) {
		this.index = index;
		this.isRosette = false;
		this.isExit = false;
	}

	addOccupant(playerToken) {
		if (playerToken instanceof Token) {
			this.#occupant = playerToken;
		} else {
			console.warn("addOccupant: argument is not a token instance");
		}
	}

	getOccupant() {
		return this.#occupant;
	}

	removeOccupant() {
		const occupant = this.#occupant;
		this.#occupant = null;

		if (occupant) {
			occupant.occupiedCell = null;
		}
	}


	get isOccupied() {
		return this.#occupant !== null;
	}
};
