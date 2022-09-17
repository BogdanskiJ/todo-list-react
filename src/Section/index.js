import React from 'react';
import { SectionJs, DivJs, HeaderJs, BackgroundColor } from "./styled";



const Section = ({ title, body, extraHeaderContent }) => (
  <SectionJs>
    <DivJs>
      <HeaderJs>{title}</HeaderJs>
      {extraHeaderContent}
    </DivJs>
    <BackgroundColor className="section__backgroundColor">
      {body}
    </BackgroundColor>
  </SectionJs>


);

export default Section;