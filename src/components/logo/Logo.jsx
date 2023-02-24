
import React from 'react';
import useLocation from '../../hooks/useLocation';

function Logo() {
  const { actions } = useLocation();

  return (
    <div>
      <h2 onClick={actions.goToMain}>Shop App</h2>
    </div>
  )
}

export default Logo;