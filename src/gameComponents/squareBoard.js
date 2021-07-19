import React, {useState} from 'react';
import Square from './square';
import { Calculate } from './calculateWinner';
const SquareBoard = () => {
    const [squareValues, setsquareValues] = useState(Array(9).fill(null));
    const [aisNext, setAisNext] = useState(true);
    const [winner, setWinner] = useState('');
    const [gameStarted, setGameStarted] = useState(false);
    const [matchDrawn, setMatchDrawn] = useState(false);
    let useThisIfwheneverRequired = '';
    const squareClicked = (ind) => {
        let squares = [...squareValues];
        if(squares[ind] || winner) return;
        gameStarted ? useThisIfwheneverRequired='' : setGameStarted(true);
        squares[ind] = aisNext ? 'A' : 'B';
        setsquareValues(squares);
        setWinner(Calculate(squares))
        let count = 0;
        gameStarted  ? squares.forEach(val => val ? count++ : count ) : useThisIfwheneverRequired = '';
        count === squares.length && !winner ? setMatchDrawn(true) : useThisIfwheneverRequired = '';
        if(!winner && !matchDrawn){ setAisNext(!aisNext) }
    }
    const refresh = () => {
        setsquareValues(Array(9).fill(null));
        setWinner('');
        setAisNext(true);
        setGameStarted(false);
        setMatchDrawn(false);
    }
    // let returnWinner;
    // returnWinner = gameStarted ? Calculate(squareValues) : '';
    // console.log(returnWinner);
    // returnWinner ? setWinner(returnWinner) : setWinner('');
    // setWinner(Calculate(squareValues));
    return (
        <div className="board">
            <h3>{winner ? `The Winner is '${winner}'` : matchDrawn ? 'Match has been drawn' : `Next Player is ${aisNext ? `'A'` : `'B'`}`}</h3>
            <div className="row">
                <Square value={squareValues[0]} click={() => squareClicked(0)} winner = {winner}/>
                <Square value={squareValues[1]} click={() => squareClicked(1)} winner = {winner}/>
                <Square value={squareValues[2]} click={() => squareClicked(2)} winner = {winner}/>
            </div>
            <div className="row">
                <Square value={squareValues[3]} click={() => squareClicked(3)} winner = {winner}/>
                <Square value={squareValues[4]} click={() => squareClicked(4)} winner = {winner}/>
                <Square value={squareValues[5]} click={() => squareClicked(5)} winner = {winner}/>
            </div>
            <div className="row">
                <Square value={squareValues[6]} click={() => squareClicked(6)} winner = {winner}/>
                <Square value={squareValues[7]} click={() => squareClicked(7)} winner = {winner}/>
                <Square value={squareValues[8]} click={() => squareClicked(8)} winner = {winner}/>
            </div><br/>
            {winner || matchDrawn ? <button className="playAgain" onClick={refresh}>Play Again!</button> : gameStarted ? <button  onClick={refresh} className="playAgain">Refresh</button> : null}
        </div>
    )
};

export default SquareBoard;