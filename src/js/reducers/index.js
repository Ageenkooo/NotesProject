import {combineReducers} from 'redux';
import {ActiveBook, Actions} from './book-active';
import {Notes} from './book';


const allReducers = combineReducers({
    books : Actions,
    active: ActiveBook,
    actions : Actions,
    notes: Notes
});

export default allReducers;
