import React from "react";
import Input from "../../Input";
import searchQueryParamName from "../searchQueryParamName";
import { Wrapper } from "./styled";
import { useQueryParameter, useReplaceQueryPatameter } from "../queryParameters"

export default () => {
    const query = useQueryParameter(searchQueryParamName)
    const replaceQueryParameter = useReplaceQueryPatameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim() !== ""
                ? target.value
                : "",
        });
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

