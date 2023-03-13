import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  margin-top: 21px;
  margin-left: 50px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  transition: 400ms ease-out;
  :hover {
    transform: scale(1.05);
    color: rgba(110, 121, 140, 1);
  }
`;

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="24" />
      {children}
    </StyledLink>
  );
};
