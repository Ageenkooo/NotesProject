// export const select = (book) => {
//   // alert("Now car is:"+ car.car);
//   return {
//     type: "BOOK_SELECTED",
//     payload: book
//   }
// };
import * as types from '../constants/ActionTypes'

export const select = (book) => ({ type: types.BOOK_SELECTED, payload:book })
export const addBook = (text) => ({ type: types.ADD_BOOK, text })
export const deleteBook = (id) => ({ type: types.DELETE_BOOK, id })
export const addNote  = (book) => ({type: types.ADD_NOTE, payload:book })
export const deleteAll  = (book) => ({type: types.ADD_NOTE, payload:book })
