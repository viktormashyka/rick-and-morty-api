import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      {/* <Header>
        <nav
          style={{
            marginLeft: '50px',
            marginTop: '20px',
            marginBottom: '20px',
          }}
        >
          <Link to="/" end style={{ marginRight: '20px' }}>
            <img
              src="../../../public/logo.png"
              alt="logo"
              width={32}
              height={32}
            />
          </Link>
        </nav>
      </Header> */}
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
