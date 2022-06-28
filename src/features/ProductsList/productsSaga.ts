import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getProducts, IProducts } from "./productsAPI";
import { fetchProductsError, fetchProductsLoading, fetchProductsSuccess } from "./productsSlice";

function* fetchProductsHandler({ payload: { urlPageParam, urlSearchParam } }: ReturnType<typeof fetchProductsLoading>) {
    
    const productsAPIBaseURL = urlSearchParam === null || urlSearchParam === "0" ?
        `https://reqres.in/api/products/?per_page=5&page=${urlPageParam}` :
        `https://reqres.in/api/products/${urlSearchParam}?per_page=5&page=${urlPageParam}&search=${urlSearchParam}`

    try {
        yield delay(500) //just to show loader
        const products: IProducts[] = yield call(getProducts, productsAPIBaseURL);
        yield put(fetchProductsSuccess(products));
    } catch (error) {
        yield put(fetchProductsError());
    }
}

export function* watchFetchProducts() {
    yield takeLatest(fetchProductsLoading.type, fetchProductsHandler);
}