import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { watchActionsSaga } from "../../sagas/saga";
import UserQueryReducer from "../Reducers/UserQueryReducer";
import CurrentUserReducer from "../Reducers/CurrentUserReducer";
import CartDropDownReducer from "../Reducers/CartDropDownReducer";
import UserDetailsReducer from "../Reducers/UserDetailsReducer";
import user from "../cuisines/userReducer";
import UserCardDetailsReducer from "../Reducers/UserCardDetailsReducer";
import createSagaMiddleware from "redux-saga";
import { persistStore } from "redux-persist";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "CartDropDownReducer",
    "UserDetailsReducer",
    "user",
    "CurrentUserReducer",
  ],
};
let AllReducers = combineReducers({
  UserQueryReducer,
  CurrentUserReducer,
  CartDropDownReducer,
  UserDetailsReducer,
  user,
  UserCardDetailsReducer,
});

let ApplicationStore = createStore(
  persistReducer(persistConfig, AllReducers),
  composeWithDevTools(applyMiddleware(logger, sagaMiddleware))
);
sagaMiddleware.run(watchActionsSaga);
export const persistor = persistStore(ApplicationStore);

export default ApplicationStore;
