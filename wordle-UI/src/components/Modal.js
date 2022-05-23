import React from 'react'

export default function Modal({ isCorrect, turn, solution }) {
  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>You Win!</h1>
          <p>The word was: <span className="solution">{solution}</span></p>
          <p>You found the solution in {turn} guesses :)</p>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>Sorry, you loose!</h1>
          <p>The word was: <span className="solution">{solution}</span></p>
          <p>Better luck next time :)</p>
        </div>
      )}  
    </div>
  )
}
