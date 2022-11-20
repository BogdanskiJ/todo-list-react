import { useLocation, useHistory } from "react-router-dom"

export const useQueryParameter = (param) => {
    const location = useLocation();


    return (new URLSearchParams(location.search)).get(param)
}


export const useReplaceQueryPatameter = () => {
    const location = useLocation();
    const history = useHistory();

    return ({ key, value }) => {
        const searchParams = new URLSearchParams(location.search);

        if (value !== " ") {
            searchParams.set(key, value)
        }

        history.push(`${location.pathname}?${searchParams.toString()}`)
    }
}