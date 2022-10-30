import { useDispatch } from 'react-redux';

import { toggleMenu } from './redux/menu';

const MenuToggle = function (props) {
  const dispatch = useDispatch();
  return <div id="menuToggle" onClick={(event) => dispatch(toggleMenu())}>
    <span>X</span>
    </div>;
};

export default MenuToggle;
