import React, { useState, useEffect } from 'react';
import { getBooksByGoogle, filterBooks, getBooksByLocalStorage } from '../service/book';



const useBookHook = () => {
    const [stateBooks, setStateBooks] = useState([])
    const [stateBooksLS, setStateBooksLS] = useState([])

    useEffect(() => {
        getBooksByGoogle().then((books)=>{
            setStateBooks(filterBooks(books))
        })
    }, []);

    useEffect(() => {
        const myBooks = getBooksByLocalStorage()
        setStateBooksLS(myBooks)
    }, []);

    return {stateBooks, setStateBooks, stateBooksLS, setStateBooksLS}
}

export default useBookHook;