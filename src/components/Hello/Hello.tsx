import * as React from 'react'

import './Hello.css'

export interface Props { 
  name: string
  level?: number | undefined
  onIncrement?: () => void
  onDecrement?: ()=> void
}

const Hello = ({ level =1, name, onDecrement, onIncrement }: Props) => { 
  if (level <= 0) {
    throw new Error('level must > 1. :D');
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getLevel(level)}
      </div>
      <div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  )
}

function getLevel(level: number = 0):string { 
    return new Array(level + 1).join('!')
}

export default Hello