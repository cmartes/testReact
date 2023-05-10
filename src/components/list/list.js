import React from 'react';
import { getBooksByGoogle, filterBooks, ProcessImage, getAuthors } from '../../service/book';


const List = ({books,addFavorite, setStateBooks}) => {
        let listData = []
        const updateBooks = ()=>{
            listData = books
        }

        const updateValue = (val) => {
            if(val.target.value != ""){
                listData = books.filter( (book) => {
                        if(book.volumeInfo.authors && book.searchInfo){
                            if(book.volumeInfo.title.includes(val.target.value) ||
                            book.searchInfo.textSnippet.includes(val.target.value) ||
                            book.volumeInfo.authors[0].includes(val.target.value)){
                                return book
                            }
                        }else{
                            if(book.volumeInfo.title.includes(val.target.value)){
                                return book
                            }
                        }
                        
                    }  
                )
                setStateBooks(listData)
            }else{
                getBooksByGoogle().then((booksG)=>{
                    setStateBooks(filterBooks(booksG))
                })
            }
            
        }

        updateBooks()

        return ( 
            <section>
                <header className="list-books">Lista de Libro</header>
                <section className='search-field'>
                    <input type='text' onChange={updateValue} placeholder='Buscar libro' />
                </section>
                <section className="content-list">
                { listData.map((book)=>(
                    <div className='book' key={book.id} >
                        <div className='column-image'>
                            <img src={ProcessImage(book)} className='img-thumb' />
                        </div>
                        <div className='column-data'>
                            <div className='title'>{book.volumeInfo.title}</div>
                            <div className='autors'>{getAuthors(book)}</div>
                            <div className='editor'>{book.volumeInfo.printType}</div>
                            <button onClick={() => addFavorite(book)}>Agregar a favoritos</button>
                        </div>
                    </div>
                ))}
                </section>
            </section>
        )
}

export default List;