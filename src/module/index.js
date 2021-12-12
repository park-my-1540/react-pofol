import { combineReducers } from 'redux';
import messages from './messages';
import ui from './ui';

const rootReducer = combineReducers({
    messages,
    ui
})


export default rootReducer;