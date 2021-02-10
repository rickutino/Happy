import React from 'react';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';

import { PageMap, Header, Footer } from './styles';
import 'leaflet/dist/leaflet.css';

import logoImg from '../../images/logo.svg';
import logoMapMaker from '../../images/map-maker.svg';

const mapIcon = Leaflet.icon({
  iconUrl: logoMapMaker,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

const OrphanagesMap: React.FC = () => {
  return (
    <PageMap>
      <aside>
        <Header>
          <img src={logoImg} alt="Happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita</p>
        </Header>
        <Footer>
          <strong>São Paulo</strong>
          <span>São bernardo do campo</span>
        </Footer>
      </aside>

      <MapContainer
        center={[34.7024898, 135.4937619]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        {/* <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAP_TOKEN}`}
        />
        <Marker icon={mapIcon} position={[34.7024898, 135.4937619]}>
          <Popup
            closeButton={false}
            minWidth={240}
            maxWidth={240}
            className="map-popup"
          >
            Lar das Meninas.
            <Link to="/">
              <FiArrowRight size={20} color="#FFF" />
            </Link>
          </Popup>
        </Marker>
      </MapContainer>

      <Link to="/" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </PageMap>
  );
};

export default OrphanagesMap;
