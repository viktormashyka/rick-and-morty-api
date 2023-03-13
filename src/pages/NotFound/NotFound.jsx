import { ErrorTitle } from './NotFound.styled';
import { BackLink } from '../../components/BackLink/BackLink';
import { useParams, useLocation } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  return (
    <ErrorTitle>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <span>This page is not found</span>
      <br />
      <span>Error 404</span>
    </ErrorTitle>
  );
};
export default NotFound;
