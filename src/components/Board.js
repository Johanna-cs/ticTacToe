import React from 'react';
import Square from './Square';

const style = {
  border: '5px solid #434952',
  backgroundColor: '#434952',
  borderRadius: '10px',
  width: '500px',
  height: '500px',
  margin: '0 auto',
  color: "#F4F3EF",
  display: 'grid',
  gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
};

const Board = ({ squares, onClick }) => (
  <div style={style}>
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);

export default Board;