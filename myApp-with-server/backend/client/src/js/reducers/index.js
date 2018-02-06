import {combineReducers} from 'redux';
import {ActiveBook, Actions} from './book-active';
import {Notes, ActiveNote} from './book';
import {Lables} from './lables'


const allReducers = combineReducers({
    books : Actions,
    active: ActiveBook,
    actions : Actions,
    notes: Notes,
    actNote : ActiveNote,
    lables: Lables
});

export default allReducers;
