import styled from 'styled-components';

import SearchIcon from '../../images/SearchIcon.svg';
import { tablet, desktop } from 'utils/vars';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media screen and (max-width: ${tablet}) {
    margin-top: 32px;
  }

  @media screen and (min-width: ${tablet}) {
    margin-top: 16px;
  }

  @media screen and (min-width: ${desktop}) {
    margin-top: 16px;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  position: relative;
`;

export const Input = styled.input`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  width: 100%;
  margin: 0;

  /* grey */

  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  background-image: url(${SearchIcon});
  background-size: auto;
  background-repeat: no-repeat;
  background-position: 16px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0em;
  text-align: left;
  padding-left: 48px;
  color: black;

  :hover,
  :focus {
    outline: 0;
    outline-offset: 0;
    border-color: rgba(110, 121, 140, 1);
  }

  @media screen and (max-width: ${tablet}) {
    height: 56px;
  }

  @media screen and (min-width: ${tablet}) {
    height: 66px;
  }

  @media screen and (min-width: ${desktop}) {
    height: 66px;
  }
`;
