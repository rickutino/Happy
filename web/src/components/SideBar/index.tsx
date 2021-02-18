/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import mapMarkerImg from '../../images/map-maker.svg';
import { Aside } from './styles';
import 'leaflet/dist/leaflet.css';

function Sidebar() {
  const { goBack } = useHistory();

  return (
    <Aside>
      <img src={mapMarkerImg} alt="Happy" />

      <footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </footer>
    </Aside>
  );
}

export default Sidebar;
