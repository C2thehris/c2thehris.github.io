import { useEffect, useRef } from 'react';
import Proptypes from 'prop-types';

import fadeObserver from './fade';

const Content = function (props) {
  const { category, elements } = props;

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) fadeObserver.observe(ref.current);
    return () => {
      if (ref.current) fadeObserver.unobserve(ref.current);
    };
  }, [ref]);

  return (
    <div className='Content-Container' ref={ref}>
      <div className='Content'>
        <div>
          <h1>{category}</h1>
          <hr />
          {elements}
        </div>
      </div>
    </div>
  );
};

Content.propTypes = {
  category: Proptypes.string,
  elements: Proptypes.arrayOf(Proptypes.node)
};

export default Content;
