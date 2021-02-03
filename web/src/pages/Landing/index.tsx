import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { PageLanding } from './styles';

import logoImg from '../../images/logo.svg';

const Landing: React.FC = () => {
  return (
    <div className="App">
      <PageLanding>
        <div className="content-wrapper">
          <img src={logoImg} alt="Happy" />

          <main>
            <h1>Leve felicidade para o mundo</h1>
            <p>Visite orfanatos e mude o dia de muitas crianças.</p>
          </main>

          <div className="location">
            <strong>São Paulo</strong>
            <span>São bernardo do campo</span>
          </div>
          <Link to="/orphanages" className="enter-app">
            <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
          </Link>
        </div>
      </PageLanding>
    </div>
  );
};

export default Landing;
