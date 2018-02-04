import * as types from '../constants/ActionTypes'

export const select = (book) => ({ type: types.BOOK_SELECTED, payload:book })
export const addBook = (text) => ({ type: types.ADD_BOOK, text })
export const deleteBook = (id) => ({ type: types.DELETE_BOOK, id })
export const addNote  = (book, text) => ({type: types.ADD_NOTE, payload:book, text: text })
export const deleteAll  = (book) => ({type: types.ADD_NOTE, payload:book })
export const selectNote = (note) => ({type: types.NOTE_SELECTED, payload: note })
export const deleteNote = (id) => ({type:types.DELETE_NOTE, id})
