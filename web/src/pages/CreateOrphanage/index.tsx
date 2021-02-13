/* eslint-disable prettier/prettier */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { FiArrowLeft, FiPlus } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import Leaflet from 'leaflet';

import { PageCreateOrphanage, Aside, Main } from './styles';
import 'leaflet/dist/leaflet.css';
import mapMarkerImg from '../../images/map-maker.svg';

const happyMapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60],
});

const CreateOrphanage: React.FC = () => {
  const { goBack } = useHistory();

  return (
    <PageCreateOrphanage id="page-create-orphanage">
      <Aside>
        <img src={mapMarkerImg} alt="Happy" />

        <footer>
          <button type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
        </footer>
      </Aside>

      <Main>
        <form className="create-orphanage-form">
          <fieldset>
            <legend>Dados</legend>

            <MapContainer
              center={[34.7024898, 135.4937619]}
              zoom={15}
              style={{ width: '100%', height: 280 }}
              className="leaflet-container"
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAP_TOKEN}`}
              />

              <Marker
                interactive={false}
                icon={happyMapIcon}
                position={[34.7024898, 135.4937619]}
              />
            </MapContainer>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input id="name" />
            </div>

            <div className="input-block">
              <label htmlFor="about">
                Sobre
                <span>Máximo de 300 caracteres</span>
              </label>
              <textarea id="name" maxLength={300} />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="uploaded-image" />

              <button className="new-image">
                <FiPlus size={24} color="#15b6d6" />
              </button>
            </div>
          </fieldset>

          <fieldset>
            <legend className="visitation">Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea id="instructions" />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Nome</label>
              <input id="opening_hours" />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button type="button" className="active">
                  Sim
                </button>
                <button type="button">Não</button>
              </div>
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </Main>
    </PageCreateOrphanage>
  );
};

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
export default CreateOrphanage;
