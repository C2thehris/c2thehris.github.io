import { useEffect, useRef } from 'react';
import Proptypes from 'prop-types';

import fadeObserver from './fade';
import { addNav } from './redux/menu';
import { useDispatch } from 'react-redux';

const Content = function (props) {
  const { layout } = props;
  const id = layout.shortName;
  const { category, img } = layout;

  const contentElements = [];
  let key = 0;
  if (layout.paragraphs) {
    contentElements.push(...layout.paragraphs.map((paragraph) => <p key={key++}>{paragraph}</p>));
  }
  if (layout.listElements) {
    contentElements.push(<ul key={key++}>{layout.listElements.map((li) => <li key={key++}>{li}</li>)}</ul>);
  }
  const imgClasses = layout.imgStyle?.join(' ') || '';

  const ref = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (ref.current) fadeObserver.observe(ref.current);
    dispatch(addNav(ref.current.id));
    return () => {
      if (ref.current) fadeObserver.unobserve(ref.current);
    };
  }, [ref, dispatch]);

  return (
    <div className='Content-Container' id={id} ref={ref}>
      <div className='Content'>
        <div>
          <h1>{category}</h1>
          <img src={img} className={`ContentImg ${imgClasses}`}></img>
          <hr />
          {contentElements}
        </div>
      </div>
    </div>
  );
};

Content.propTypes = {
  layout: Proptypes.object
};

export default Content;
