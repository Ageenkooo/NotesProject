import { BOOK_SELECTED, ADD_BOOK, DELETE_BOOK } from '../constants/ActionTypes'

// const  initialState = [
//   {
//     id : 1,
//     book : "my first book",
//     note : "one",
//     notes : [
//               {
//                 id:10,
//                 name : "1.1 note",
//               },
//               {
//                 id:20,
//                 name : "1.2 note",
//               },
//               {
//                 id:30,
//                 name : "1.3 note",
//               },
//             ]
//   },
//   {
//     id : 2,
//     book : "my second book",
//     note : "two",
//     notes : [
//               {
//                 id:40,
//                 name : "2.1 note",
//               },
//               {
//                 id:50,
//                 name : "2.2 note",
//               },
//               {
//                 id:60,
//                 name : "2.3 note",
//               },
//             ],
//   },
//   {
//     id : 3,
//     book : "my third book",
//     notes : [
//               {
//                 id:70,
//                 name : "3.1 note",
//               },
//               {
//                 id:80,
//                 name : "3.2 note",
//               },
//               {
//                 id:90,
//                 name : "3.3 note",
//               },
//             ],
//   },
// ]

const  initialState = [
  {
    id : 1,
    book : "my first book",
    note : "one",
    deleted:false,
  },
  {
    id : 2,
    book : "my second book",
    note : "two",
    deleted : false,
  },
  {
    id : 3,
    book : "my third book",
    note:"three",
    deleted : false
  },
]
export  function ActiveBook(state = null, action) {
  switch (action.type) {
    case BOOK_SELECTED:
      return action.payload;
      break;
    //
    // case ADD_NOTE:
    // action.payload.notes=[...action.payload.notes,
    //       {id:action.payload.notes.reduce((maxId, note) => Math.max(note.id, maxId), -1) + 1,
    //          name:"hhh"}];
    // return action.payload;
    // break;

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
      return state.filter(book =>
        book.id !== action.id
      )

    default:
      return state
  }
}
