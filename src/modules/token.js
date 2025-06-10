class Token {
	#player; // Private field
	#id;
	#isOnBoard = false;
	#hasExited = false;
	#occupiedCell = null;

	constructor(player, tokenId) {
		this.#player = player;
		this.#id = tokenId;
	}

	get occupiedCell() {
		return this.#occupiedCell;
	}

	set occupiedCell(cell) {
		if (cell !== null && !(cell instanceof Cell)) {
			console.warn("set occupiedCell: argument is not a cell instance");
			return;
		}
		this.#occupiedCell = cell;
	}


	get tokenId() {
		return this.#id;
	}

	get isOnBoard() {
		return this.#isOnBoard;
	}

	set isOnBoard(value) {
		this.#isOnBoard = value;
	}

	get tokenPlayer() {
		return this.#player;
	}

	get hasExited() {
		return this.#hasExited;
	}

	exit() {
		this.#hasExited = true;
		this.#isOnBoard = false;
	}

	reset() {
		this.#isOnBoard = false;
		this.#occupiedCell = null;
		this.#hasExited = false;
	}
};
