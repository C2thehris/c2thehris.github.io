import mathworksLogo from './assets/Matlab_Logo.png';
import Content from './Content';

const experienceInfo = {
  category: 'Experience',
  paragraphs: [
    `From May to August 2022, I worked as an EDG intern for MathWorks.
    During the time I spent there, I implemented new UI workflows for MATLAB Add-Ons.
    To accomplish this, I primarily used JavaScript (and HTML/CSS), specifically the Dojo framework.`,
    'If you have used MATLAB Add-Ons after R2023a, it is highly likely you have used a feature I implemented!'
  ]
};

const Experience = function () {
  const content = [];
  content.push(<img src={mathworksLogo} className="ContentImg"/>);
  content.push(<h4>The MathWorks, Inc.</h4>);
  content.push(experienceInfo.paragraphs.map((paragraph, i) => <p key={i}>{paragraph}</p>));
  return <Content category={experienceInfo.category} elements={content} />;
};

export default Experience;
