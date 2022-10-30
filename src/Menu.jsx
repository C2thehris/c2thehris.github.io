import { useSelector } from 'react-redux';
import Contact from './Contact';

const scrollHandler = function (ref, event) {
  event.preventDefault();
  document.querySelector(`#${ref}`).scrollIntoView();
};

const Menu = function () {
  const { open, refs } = useSelector((state) => state.menu);
  const ids = refs.map((ref, i) => (
  <div key={i}>
    <a href={`#${ref}`} onClick={scrollHandler.bind(this, ref)}>{ref}</a>
  </div>));

  return (<div id="menu" className={open ? 'opened' : 'closed'}>
    <div>
      {ids}
    </div>
    <Contact />
  </div>);
};

export default Menu;
