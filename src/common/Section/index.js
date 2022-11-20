import React from 'react';
import { SectionJs, DivJs, HeaderJs, BackgroundColor } from "./styled";



const Section = ({ title, body, extraHeaderContent, setExampleTasks }) => (
  <SectionJs>
    <DivJs>
      <HeaderJs>{title}</HeaderJs>
      {extraHeaderContent}
      {setExampleTasks}
    </DivJs>
    <BackgroundColor className="section__backgroundColor">
      {body}
    </BackgroundColor>
  </SectionJs>
);

export const WrongTaskSection = ({ title, body, extraHeaderContent, setExampleTasks }) => (
  <SectionJs>
    <DivJs>
      <HeaderJs>{title}</HeaderJs>
      {extraHeaderContent}
      {setExampleTasks}
    </DivJs>
  </SectionJs>
);

export default Section;