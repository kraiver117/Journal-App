import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { authReducer } from '../reducers/authReducer';
import { uiReducer } from '../reducers/uiReducers';
import { notesReducer } from '../reducers/notesReducer';

const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    notes: notesReducer
});

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);