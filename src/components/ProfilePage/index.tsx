import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  EditButton,
  CakeIcon,
  Followage,
  LocationIcon,
} from './styles';

import Feed from "../Feed";

const ProfilePage: React.FC = () => {
  return (
      <Container>
        <Banner>
          <Avatar />
        </Banner>
          <ProfileData>
            <EditButton outlined>Editar Perfil</EditButton>
            <h1>Michael Heming</h1>
            <h2>@devmichaelheming</h2>

            <p>
              Developer at <a href="http://topsapp.com.br">@TopsApp</a>
            </p>

            <ul>
              <li>
                <LocationIcon />
                Sinop, Mato Grosso
              </li>
              <li>
                <CakeIcon />
                Nascido(a) em 25 de maio de 2021
              </li>
            </ul>

            <Followage>
              <span>seguindo <strong>15</strong></span>
              <span><strong>1.002.146 </strong>seguidores</span>
            </Followage>
          </ProfileData>
          <Feed />
      </Container>
  );
}

export default ProfilePage;