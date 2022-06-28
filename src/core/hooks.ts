import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import type { RootState, AppDispatch } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useQueryParameter = (key: string, value: string) => {
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search);
    searchParams.set(key, value);
}

interface IParameters {
    key: string,
    value: string
}

export const useReplaceQueryParameter = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const searchParams = new URLSearchParams(location.search);

    const replaceQueryParameters = (parameters: IParameters[]) => {
        parameters.forEach(({ key, value }) => {
            if (value === "" || value === "0") {
                searchParams.delete(key);
            } else {
                searchParams.set(key, value);
            }
        });
        navigate(`${location.pathname}?${searchParams.toString()}`);
    };

    return replaceQueryParameters;
};