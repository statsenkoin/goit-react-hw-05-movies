import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, NavBox, NavLinkStyled } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <NavBox>
          <NavLinkStyled to="/" end>
            Home
          </NavLinkStyled>
          <NavLinkStyled to="/movies">Movies</NavLinkStyled>
        </NavBox>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
