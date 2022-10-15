import rayTracingImg from './assets/1920_1080_3.png';
import Content from './Content';

const aboutInfo = {
  category: 'About Me',
  paragraphs: [
    'Greetings! My name is Christos Kreatsoulas, and welcome to my personal website.',
    'I am currently a Computer Science student at Rensselaer Polytechnic Institute in Troy, NY. I plan to graduate at the end of the 2023 academic year.',
    'I was previously an EDG intern at MathWorks, where I mostly did front-end work with a small splash in back-end.',
    'Learn more about my background by scrolling through the cards below!'
  ]
};

const About = function () {
  const rayTracingPhoto = <img src={rayTracingImg} className="ContentImg shadow" key="1920"></img>;
  const paragraphs = aboutInfo.paragraphs.map((text, i) => <p key={i}>{text}</p>);
  paragraphs.unshift(rayTracingPhoto);

  return <Content category={aboutInfo.category} elements={paragraphs}/>;
};

export default About;
