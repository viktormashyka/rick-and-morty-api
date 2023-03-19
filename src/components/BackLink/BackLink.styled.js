import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;

  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  transition: 250ms ease-out;
  :hover {
    transform: scale(1.05);
    color: rgba(110, 121, 140, 1);
  }
`;
