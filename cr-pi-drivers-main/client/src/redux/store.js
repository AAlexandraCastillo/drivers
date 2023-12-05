import {createStore , applyMiddleware, compose} from 'redux';
import ThunkMiddleware from 'redux-thunk'; //para manejar acciones asincronicas
import reducer from './reducer.js'
const composeEnhacers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store= createStore(
    reducer,
    composeEnhacers(applyMiddleware(ThunkMiddleware))
 )
 export default store;
