import React from 'react';
import List from "./list/list";
import  Favorite  from "./favorite/favorite";
import useBookHook from '../hooks/bookHook';
import { setBookOnLocalStorage, removeElementFromBooks, getBooksByLocalStorage, setFullBooksOnLocalStorage } from '../service/book';


const MainView = ()=>{
    const { stateBooks, setStateBooks, stateBooksLS, setStateBooksLS } = useBookHook()

    const addFavorite = (book) =>{
        setBookOnLocalStorage(book)
        setStateBooks(removeElementFromBooks(stateBooks,book))

        setStateBooksLS(getBooksByLocalStorage())
    }

    const removeFavorite = (book) =>{
        const myBooks = removeElementFromBooks(stateBooksLS,book)
        setStateBooksLS(myBooks)
        setFullBooksOnLocalStorage(myBooks)
    }

    return (
        <section className='list-component'>
            <div className='component'>
                <List books={stateBooks} addFavorite={addFavorite} setStateBooks={setStateBooks} />
            </div>
            <div className='component'>
                <Favorite books={stateBooksLS} removeFavorite={removeFavorite} />
            </div>
        </section>
    )
}

export default MainView