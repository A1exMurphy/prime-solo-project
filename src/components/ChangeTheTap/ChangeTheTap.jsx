import React from 'react';
import NavMenu from '../NavMenu/NavMenu';

import { useHistory } from 'react-router-dom';

function ChangeTheTap() {
  const history = useHistory();

  return (
    <div>
        <NavMenu />
      <center>
        <div>Change The Tap</div>
      </center>
    </div>
  );
}

export default ChangeTheTap;