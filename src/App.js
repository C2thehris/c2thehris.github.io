import './App.css';
import Education from './Education';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Photo from './assets/me.jpg';

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Christos Kreatsoulas</h1>
        <img src={Photo} />
        <div id="occupation">
          <h4>Computer Science Student</h4>
          <h6>Rensselaer Polytechnic Institute</h6>
        </div>
      </header>
      <About/>
      <Education/>
      <Experience/>
      <Projects />
    </div>
  );
}

export default App;
