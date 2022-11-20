export const selectTasks = state => selectTasksState(state).tasks;

export const selectHideDone = state => selectTasksState(state).hideDone;

export const getTaskById = (state, taskId) => selectTasks(state).find(({ id }) => id === taskId);

export const selectTasksByQuery = (state, query) => {
    const tasks = selectTasks(state);

    if (!query || query.trim() === "") {
        return tasks;
    }
    return tasks.filter(({ content }) => content.toUpperCase().includes(query.trim().toUpperCase()))
};


const que = (new URLSearchParams(location.search)).get(searchQueryParamName);


export const [queryParam, setQueryParam] = useQueryParameter(params);
const setQuery = (params) => {
    setQueryParam(new URLSearchParams(location.search)).get(params)
}


setQueryParam(new URLSearchParams(location.search)).get(params)





const [exampleTasksStatus, setExampleTasksStatus] = useState({
    state: false
});

const timeout = () => {
    setExampleTasksStatus({ state: true })
    setTimeout(() => setExampleTasksStatus({ state: false }) & (dispatch(fetchExampleTasks())), 1000)
};
