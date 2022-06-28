import { useLocation, useNavigate } from "react-router";

interface IUrlParameters {
    key: string,
    value: number
}

export const useUrlParameter = (key: string) => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get(key);
}

export const useChangeUrlParameters = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const searchUrlParams = new URLSearchParams(location.search);

    const changeUrlParameters = (parameters: IUrlParameters[]) => {
        parameters.forEach(({ key, value }) => {
            if(value === 1){
                searchUrlParams.delete(key)
            }else{
                searchUrlParams.set(key, value.toString());
            }
        });
        navigate(`${location.pathname}?${searchUrlParams}`);
    };

    return changeUrlParameters;
};