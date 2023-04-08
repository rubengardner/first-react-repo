import React from 'react'
import Book from './Book'

function RenderingList() {
    const bookList = [
        'Kill a mockinbird',
        'The escape',
        'Dairy of a Geisha'
    ]

  return (
    <div>
        {bookList.map(book =>{
            return <Book key={book} book={book} />
        })}
    </div>
  )
}

export default RenderingList