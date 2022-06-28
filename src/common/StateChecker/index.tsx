import { ErrorScreen } from "./ErrorScreen";
import { Loader } from "./Loader";

interface IStateChecker {
    isLoading: boolean,
    isError: boolean,
    children: React.ReactNode
}

export const StateChecker = ({ isLoading, isError, children }: IStateChecker) => {
    return (
        <>
            {
                isLoading ? <Loader />
                    : isError ? <ErrorScreen />
                        : children
            }
        </>
    )
}