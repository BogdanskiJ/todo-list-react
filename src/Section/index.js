import React from 'react';
import "./style.css";



const Section = ({ title, body, extraHeaderContent }) => (
  <section className="section">
    <div className="section__buttonTaskList">
      <h2 className="section__headerWeight">{title}</h2>
      {extraHeaderContent}
    </div>
    <div className="section__backgroundColor">
      {body}
    </div>
  </section>


);

export default Section;