import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import createSagaMiddleware from "Redux-saga";
import { watchActionsSaga } from "../sagas/saga";

import rootReducer from "./rootReducer";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(watchActionsSaga);

export default store;
