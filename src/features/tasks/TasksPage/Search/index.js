import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import Input from "../../Input";
import searchQueryParamName from "../searchQueryParamName";
import { Wrapper } from "./styled";
import { useQueryParameter, useReplaceQueryPatameter } from "../queryParameters"

export default () => {
    const location = useLocation();



    const query = useQueryParameter(searchQueryParamName)
    const replaceQueryParameter = useReplaceQueryPatameter();



    const history = useHistory();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim() !== ""
                ? target.value
                : undefined,
        });


        /*
        const searchParams = new URLSearchParams(location.search);

        if (target.value.trim() === "") {
            searchParams.delete(searchQueryParamName);
        } else {
            searchParams.set(searchQueryParamName, target.value)
        }

        history.push(`${location.pathname}?${searchParams.toString()}`)
*/
    };



    return (
        <Wrapper>
            <Input
                placeholder="Filtruj zadania"
                value={query || ""}
                onChange={onInputChange}
            >
            </Input>
        </Wrapper>
    )
};

