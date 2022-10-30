import './App.css';
import Photo from './assets/me.JPG';
import Nav from './Nav';
import { useSelector } from 'react-redux';

import Content from './Content';

function App () {
  const layout = useSelector((state) => state.layout).map((content) => (<Content key={content.shortName} layout={content}/>));

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
          <h1 key="name">Christos Kreatsoulas</h1>
          <img src={Photo} className="shadow" key="me"/>
          <div id="occupation" key="occupation">
          <h4>Computer Science Student | EDG Engineer</h4>
          <h6>Rensselaer Polytechnic Institute | The MathWorks, Inc.</h6>
      </div>
      </header>
      {layout}
    </div>
  );
}

export default App;
