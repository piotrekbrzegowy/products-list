import { all } from "redux-saga/effects";
import { watchFetchProducts } from "../features/ProductsList/productsSaga";

export default function* rootSaga() {
    yield all([watchFetchProducts()]);
}