import React from "react";
import TasksPage from "./features/tasks/TasksPage/index";
import TaskPage from "./features/tasks/TaskPage";
import { Link, Switch, Route, HashRouter, Redirect } from "react-router-dom";
import Author from "./features/author/Author";
import { StyledNav, StyledLiList, StyledUlList, StyledLink } from "./styled";

export default () => (
    <HashRouter>
        <StyledNav>
            <StyledUlList>
                <StyledLiList>
                    <StyledLink to="/zadania">
                        Zadania
                    </StyledLink>
                </StyledLiList>
                <StyledLiList>
                    <StyledLink to="/autor">
                        Autor
                    </StyledLink>
                </StyledLiList>
            </StyledUlList>
            <Switch>
                <Route path="/zadania/:id">
                    <TaskPage />;
                </Route>
                <Route path="/zadania">
                    <TasksPage />;
                </Route>
                <Route path="/autor">
                    <Author />;
                </Route>
                <Route path="/">
                    <Redirect to="/zadania"></Redirect>;
                </Route>
            </Switch>
        </StyledNav>
    </HashRouter>



)




