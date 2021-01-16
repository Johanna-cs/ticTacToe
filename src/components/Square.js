import React, { useState } from 'react';


const Square = ({ value, onClick }) => {
const [colorBg, setColorBg] = useState(false)
  return (
  <div
    onMouseEnter={() => setColorBg(!colorBg)}
    onMouseLeave={() => setColorBg(!colorBg)}
    style={{
    width:"160px",
    height:"160px",
    borderRadius: '10px',
    margin:"auto",
    alignSelf:"center",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    background: '#8D9CA4',
    fontSize: '50px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'}} 
    onClick={onClick}>
        {value}
  </div>
)};

export default Square;