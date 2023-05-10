import { client } from "./client";
import { NAME_LIST_LS, REQUEST_BASE } from "../constans/constans";

export const getBooksByGoogle = async () => {
    const books = await client.get(REQUEST_BASE).catch(err => {
        console.log(err);
      });
    
    return (books)?books.data.items:[]
}

export const setFullBooksOnLocalStorage = (books) =>{
    localStorage.setItem(NAME_LIST_LS, JSON.stringify(books));
}

export const setBookOnLocalStorage = (book) =>{
    let myListBook = getBooksByLocalStorage()
    myListBook.push(book)
    localStorage.setItem(NAME_LIST_LS, JSON.stringify(myListBook));
}

export const getBooksByLocalStorage = () =>{
    const booksLS = JSON.parse(localStorage.getItem(NAME_LIST_LS));
    return (booksLS)?booksLS:[]
}

export const filterBooks = (books) => {
    const resultFilter = books.filter((book)=>{
        const bLS = getBooksByLocalStorage().find(element => element.id == book.id);
        if(bLS == undefined) return book
    })

    return resultFilter
}

export const removeElementFromBooks = (books, bookRemove) => {
    const resultFilter = books.filter(book => book.id != bookRemove.id)
    return resultFilter
}

export const ProcessImage = (book) =>{
    if(book.volumeInfo.imageLinks){
        if(book.volumeInfo.imageLinks.thumbnail){
            return book.volumeInfo.imageLinks.thumbnail
        }else if(book.volumeInfo.imageLinks.smallThumbnail){
            return book.volumeInfo.imageLinks.smallThumbnail
        }
        return ""
    }
    return ""
}

export const getAuthors = (book) =>{
    let authors = ``
    if(book.volumeInfo.authors){
        book.volumeInfo.authors.forEach((author) => {
            authors = authors.concat(author).concat("\n")
        })
    }

    return authors
}