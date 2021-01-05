import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist";
// import createSagaMiddleWare from "redux-saga";
import thunk from "redux-thunk";

// const sagaMiddleware = createSagaMiddleWare();

const middleWares = [thunk];

if (process.env.NODE_ENV === "production") {
    middleWares.push(logger);
}

// sagaMiddleware.run(fetchCollectionStart);

export const store = createStore(rootReducer, applyMiddleware(...middleWares));

export const persistor = persistStore(store);
