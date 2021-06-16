import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import pokesReducer from './pokeDucks';

const rootReducer = combineReducers({
    pokemones: pokesReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

//Almacenamiento de estados de los pokemones
export default function generateStore(){
    const store =  createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));
    return store;
}