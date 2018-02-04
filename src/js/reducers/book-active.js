import { BOOK_SELECTED, ADD_BOOK, DELETE_BOOK } from '../constants/ActionTypes'

const  initialState = [
  {
    id : 1,
    book : "my first book",
    note : "one",
    selectes: false,
    deleted:false,
  },
  {
    id : 2,
    book : "my second book",
    note : "two",
    selected: false,
    deleted : false,
  },
  {
    id : 3,
    book : "my third book",
    note:"three",
    selected: false,
    deleted : false
  },
]
export  function ActiveBook(state = {}, action) {
  switch (action.type) {
    case BOOK_SELECTED:
    action.payload.selected = true;
      return action.payload;
      break;
    default:
      return state;
  }
}

export function Actions(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: state.reduce((maxId, book) => Math.max(book.id, maxId), -1) + 1,
          book: action.text,
          note: "null"
        }
      ]

    case DELETE_BOOK:
    state.map((book) => {if(book.id===action.id) book.deleted = true} )
      return state.filter(book =>
        book.id !== action.id
      )

    default:
      return state
  }
}
