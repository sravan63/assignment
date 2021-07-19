export const Calculate = (squareArray) => {
    const winningArr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
    for (let i = 0; i < winningArr.length; i++) {
        const [a, b, c] = winningArr[i];
        if (squareArray[a] && squareArray[a] === squareArray[b] && squareArray[a] === squareArray[c]) {
            return squareArray[a];
        }
    }
    return null;
}