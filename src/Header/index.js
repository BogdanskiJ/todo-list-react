import React from 'react';
import { HeaderJs } from "./styled";

const Header = ({ title }) => (
    <header>
        <HeaderJs>{title}</HeaderJs>
    </header>
);

export default Header;