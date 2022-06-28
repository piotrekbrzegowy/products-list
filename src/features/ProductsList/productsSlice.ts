import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../core/store";
import { IProducts } from "./productsAPI";

type Status = "initial" | "loading" | "success" | "error";

interface IProductsSlice {
    status: Status;
    productsData: IProducts | undefined;
}

const initialState: IProductsSlice = {
    status: "initial",
    productsData: undefined
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        fetchProductsLoading: (_, payload): IProductsSlice => ({
            status: "loading",
            productsData: undefined
        }),
        fetchProductsSuccess: (_, { payload: products }): IProductsSlice => ({
            status: "success",
            productsData: products.data
        }),
        fetchProductsError: (): IProductsSlice => ({
            status: "error",
            productsData: undefined
        })
    }
})

export const { fetchProductsLoading, fetchProductsSuccess, fetchProductsError } = productsSlice.actions;

export const selectProducts = (state: RootState) => state.products.productsData;
export const selectLoading = (state: RootState) => state.products.status === "loading";
export const selectError = (state: RootState) => state.products.status === "error";

export default productsSlice.reducer;