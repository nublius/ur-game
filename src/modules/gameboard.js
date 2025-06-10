const GameBoard = (function Board() {
	const BOARD_SIZE = 22;
	const board = [];

	const initBoard = () => {
		for (let i = 0; i < BOARD_SIZE; i++) {
			const cell = new Cell(i);

			// Mark Rosettes at indices
			if ([4, 8, 11, 17, 19].includes(i)) {
				cell.isRosette = true;
			}
			if ([20, 21].includes(i)) {
				cell.isExit = true;
			}

			board.push(cell);
		}
	};

	const resetBoard = () => {
		board.length = 0;
		initBoard();
	}

	return {
		getBoard: () => board,
		getCell: (index) => board[index],
		resetBoard,
		initBoard
	};

})();
