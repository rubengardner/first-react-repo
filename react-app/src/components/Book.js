import React from 'react'

function Book(props) {
    const book = props.book
  return (
    <div>
        <h2>{props.book}</h2>
    </div>
  )
}

export default Book