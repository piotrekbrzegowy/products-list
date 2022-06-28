import axios from "axios";

export interface IProducts {
    page: number,
    per_page: number,
    total_pages: number | undefined,
    total: number | undefined,
    data: {
        id: number,
        name: string,
        year: number,
        color: string
    }
}

export const getProducts = async (path: string) => {
    const response = await axios.get<IProducts>(path);
    return response;
}