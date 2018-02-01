import { ADD_NOTE, DELETE_ALL } from '../constants/ActionTypes'

const  initialState = [
  {
    book_id:1,
    id:10,
    name : "1.1 note",
  },
  {
    book_id:1,
    id:20,
    name : "1.2 note",
  },
  {
    book_id:1,
    id:30,
    name : "1.3 note",
  },
  {
    book_id:2,
    id:40,
    name : "2.1 note",
  },
  {
    book_id:2,
    id:50,
    name : "2.2 note",
  },
  {
    book_id:2,
    id:60,
    name : "2.3 note",
  },
  {
    book_id: 3,
    id:70,
    name : "3.1 note",
  },
  {
    book_id: 3,
    id:80,
    name : "3.2 note",
  },
  {
    book_id: 3,
    id:90,
    name : "3.3 note",
  },
]

export  function Notes(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
    return [
      ...state,
      {
        book_id:action.payload.id,
        id: state.reduce((maxId, note) => Math.max(note.id, maxId), -1) + 1,
        name:"new",
      }
    ]
    break;
    case DELETE_ALL:
    return state.filter(note =>
      note.book_id !== action.payload.id
    )
    default:
      return state;
  }
}
