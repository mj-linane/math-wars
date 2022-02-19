import React from 'react';

const GameResult = (props) => {
  return (
    <div className="result">
        <p>{props.result}</p>
    </div>
  );
}

export default GameResult