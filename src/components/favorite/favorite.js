import React from 'react';
import { ProcessImage, getAuthors } from '../../service/book';

const Favorite = ({books,removeFavorite}) => {
    return ( 
        <section>
            <header className="list-books">Lista de Libro favoritos</header>
            <section className="content-list">
                { books.map((book)=>(
                    <div className='book' key={book.id} >
                        <div className='column-image'>
                            <img src={ProcessImage(book)} className='img-thumb' />
                        </div>
                        <div className='column-data'>
                            <div className='title'>{book.volumeInfo.title}</div>
                            <div className='autors'>{getAuthors(book)}</div>
                            <div className='editor'>{book.volumeInfo.printType}</div>
                            <button onClick={() => removeFavorite(book)}>Remover de favoritos</button>
                        </div>
                        
                        
                    </div>
                ))}
                </section>
        </section>
    )
}

export default Favorite