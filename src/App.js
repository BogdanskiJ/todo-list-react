import React from "react";
import Tasks from "./features/tasks/Tasks";
import { Link, Switch, Route, HashRouter } from "react-router-dom";
import Author from "./features/author/Author";
import { StyledNav, StyledLiList, StyledUlList, StyledLink} from "./styled";

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
                <Route path="/zadania">
                    <Tasks />;
                </Route>
                <Route path="/autor">
                    <Author />;
                </Route>
            </Switch>
        </StyledNav>
    </HashRouter>



)




