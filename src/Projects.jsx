import rayTracingImg from './assets/1200_600.png';
import Content from './Content';

const experienceInfo = {
  category: 'Projects',
  paragraphs: [
    'One of the projects I have worked on is a ray tracer written in Nvidia CUDA C++.',
    `I initially implemented the ray tracer in plain C++ by following Peter Shirley's book "Ray Tracing in One Weekend,"
    before becoming interested in how to speed it up with a GPU.
    This led to me discovering CUDA,
    which allowed me to speed up the execution time by about 5-10x and exposed me to the massive power (and complexity) of GOOD parallel computing.
    I hope to further my studies in the area by taking a parallel computing course in the Spring 2023 semester.`
  ]
};

const Experience = function () {
  const content = [];
  content.push(<img src={rayTracingImg} className="ContentImg"/>);
  content.push(<h4>CUDA Ray Tracing In One Weekend</h4>);
  content.push(experienceInfo.paragraphs.map((paragraph, i) => <p key={i}>{paragraph}</p>));
  return <Content category={experienceInfo.category} elements={content} />;
};

export default Experience;
