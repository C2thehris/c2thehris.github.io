
import rpiLogo from './assets/rpi_logo.png';
import Content from './Content';

const educationInfo = {
  category: 'Education',
  listElements: [
    'Data Structures (C++)',
    'Introduction To Algorithms',
    'Operating Systems (C)',
    'Numerical Computing (MATLAB)',
    'Principles of Software (Java / OOP)',
    'Computational Finance'
  ]
};

const Education = function () {
  const content = [];
  content.push(<img src={rpiLogo} className="ContentImg shadow" id="rpiLogo" />);

  const listElements = educationInfo.listElements.map((text, i) => {
    return <li key={i}>{text}</li>;
  });
  content.push(<div>
    <p>B.S. in Computer Science, May 2023</p>
    <hr />
    <h4>Key Courses:</h4>
    <ul>{listElements}</ul>
  </div>);

  return <Content category={educationInfo.category} elements={content} />;
};

export default Education;
