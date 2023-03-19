import { Container, ErrorTitle } from './NotFound.styled';
import { BackLink } from '../../components/BackLink/BackLink';
import { useLocation } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  return (
    <Container>
      <main>
        <BackLink to={backLinkHref}>Go back</BackLink>
        <ErrorTitle>
          <span>This page is not found</span>
          <br />
          <span>Error 404</span>
        </ErrorTitle>
      </main>
    </Container>
  );
};
export default NotFound;
