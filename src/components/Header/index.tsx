import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const location = useLocation();

  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <Link to="/">
            Listagem
            {location.pathname === '/' && <hr />}
          </Link>
          <Link to="/import">
            Importar {location.pathname === '/import' && <hr />}
          </Link>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
