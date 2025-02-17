import React from 'react'

export default function Result(props) {
  const { score, totalScore, onRestart } = props;
//here the game restarting
  const handleRestart = () => {
    if (onRestart) {
      onRestart();
    }
  };
//here returning the final result
  return (
    <div>
      <h1>Final Results</h1>
      <h2>{score} out of {totalScore} correct - {(score/totalScore)*100}%</h2>
      <button onClick={handleRestart}>Restart Game</button>
    </div>
  );
}