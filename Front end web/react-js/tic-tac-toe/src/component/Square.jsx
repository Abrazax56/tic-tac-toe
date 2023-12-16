import {useState} from 'react'
function Square({value, click}) {
  return (
    <button className="square" onClick={click}>{value}</button>
  )
}

export default Square