import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import { forbiddenWordsMiddleware } from "../middleware";
import apiSaga from "../sagas/api-saga";
import createSagaMiddleware from "redux-saga";

const intitializeSagaMiddleware = createSagaMiddleware();

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, applyMiddleware(forbiddenWordsMiddleware, intitializeSagaMiddleware));

intitializeSagaMiddleware.run(apiSaga);

export default store;
