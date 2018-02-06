import { ADD_NOTE, DELETE_ALL, DELETE_NOTE, NOTE_SELECTED } from '../constants/ActionTypes'

const  initialState = [
  {
    book_id:1,
    id:1,
    name : "1.1 note",
    text : "text1",
    selected: false,
    deleted: false,
    lables : ["a1"]
  },
  {
    book_id:1,
    id:2,
    name : "1.2 note",
    text : "text2",
    selected: false,
    deleted: false,
    lables : ["a1", "a2"]
  },
  {
    book_id:1,
    id:3,
    name : "1.3 note",
    text : "text3",
    selected: false,
    deleted: false,
    lables : ["a1", "a2", "a3"]
  },
  {
    book_id:2,
    id:4,
    name : "2.1 note",
    text : "text4",
    selected: false,
    deleted: false,
    lables : ["b1"]
  },
  {
    book_id:2,
    id:5,
    name : "2.2 note",
    text : "text5",
    selected: false,
    deleted: false,
    lables : ["b1", "b2"]
  },
  {
    book_id:2,
    id:6,
    name : "2.3 note",
    text : "text6",
    selected: false,
    deleted: false,
    lables : ["b1", "b2", "b3"]
  },
  {
    book_id: 3,
    id:7,
    name : "3.1 note",
    text : "text7",
    selected: false,
    deleted: false,
    lables : ["c1"]
  },
  {
    book_id: 3,
    id:8,
    name : "3.2 note",
    text : "text8",
    selected: false,
    deleted: false,
    lables : ["c1", "c2"]
  },
  {
    book_id: 3,
    id:9,
    name : "3.3 note",
    text : "text9",
    selected: false,
    deleted: false,
    lables : ["c1", "c2", "c3"]
  },
]

export  function ActiveNote(state = {}, action) {
  switch (action.type) {
    case NOTE_SELECTED:
      action.payload.selected = true;
      return action.payload;
      break;
    default:
      return state;
  }
}

export  function Notes(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
    return [
      ...state,
      {
        book_id:action.payload.id,
        id: state.reduce((maxId, note) => Math.max(note.id, maxId), -1) + 1,
        name:action.text,
        text:"put your text here",
        deleted: false,
        lables: []
      }
    ]
    break;
    case DELETE_NOTE:
    state.map((note) => {if(note.id===action.id) note.deleted = true} )
      return state.filter(note =>
        note.id !== action.id
      )
    case DELETE_ALL:
    return state.filter(note =>
      note.book_id !== action.payload.id
    )
    default:
      return state;
  }
}
