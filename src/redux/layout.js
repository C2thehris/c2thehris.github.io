import { createSlice } from '@reduxjs/toolkit';

import rayTracingImg2 from '../assets/1920_1080_2.png';
import rayTracingImg3 from '../assets/1920_1080_3.png';
import rpiLogo from '../assets/rpi_logo.png';
import mathworksLogo from '../assets/Matlab_Logo.png';

const layout = [
  {
    category: 'About Me',
    shortName: 'About',
    paragraphs: [
      'Greetings! My name is Christos Kreatsoulas, and welcome to my personal website.',
      'I am currently a Computer Science student at Rensselaer Polytechnic Institute in Troy, NY. I plan to graduate at the end of the 2023 academic year.',
      'I was previously an EDG intern at MathWorks, where I mostly did front-end work with a small splash in back-end. I have received and accepted a return offer and will begin work after graduation.',
      'Learn more about my background by scrolling through the cards below!'
    ],
    img: rayTracingImg3,
    imgStyle: [
      'shadow'
    ]
  },
  {
    category: 'Education',
    shortName: 'Education',
    listElements: [
      'Data Structures (C++)',
      'Introduction To Algorithms',
      'Operating Systems (C)',
      'Numerical Computing (MATLAB)',
      'Principles of Software (Java / OOP)',
      'Computational Finance'
    ],
    img: rpiLogo,
    imgStyle: [
      'shadow',
      'rpiLogo'
    ]
  },
  {
    category: 'Experience',
    shortName: 'Experience',
    paragraphs: [
      `From May to August 2022, I worked as an EDG intern for MathWorks.
      During the time I spent there, I implemented new UI workflows for MATLAB Add-Ons.
      To accomplish this, I primarily used JavaScript (and HTML/CSS), specifically the Dojo framework.`,
      'If you have used MATLAB Add-Ons after R2023a, it is highly likely you have used a feature I implemented!'
    ],
    img: mathworksLogo
  },
  {
    category: 'Projects',
    shortName: 'Projects',
    paragraphs: [
      'One of the projects I have worked on is a ray tracer written in Nvidia CUDA C++.',
      `I initially implemented the ray tracer in plain C++ by following Peter Shirley's book "Ray Tracing in One Weekend,"
      before becoming interested in how to speed it up with a GPU.
      This led to me discovering CUDA,
      which allowed me to speed up the execution time by about 5-10x and exposed me to the massive power (and complexity) of GOOD parallel computing.
      I hope to further my studies in the area by taking a parallel computing course in the Spring 2023 semester.`
    ],
    img: rayTracingImg2,
    imgStyle: [
      'shadow'
    ]
  }
];

export const layoutSlice = createSlice({
  name: 'layout',
  initialState: layout
});

export default layoutSlice.reducer;
