import styled from 'styled-components';
// import { HiSearch } from 'react-icons/hi';

import SearchIcon from '../../images/SearchIcon.svg';
import { mobile, tablet, desktop } from 'utils/vars';

export const Wrapper = styled.div`
  /* display: inline-flex;
  align-items: center; */
  /* position: relative; */
  /* margin-top: 16px;
  text-transform: uppercase;
  width: 100%; */

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

  /* position: absolute; */
  width: 100%;
  margin: 0;
  /* height: 56px; */
  /* left: 0px;
  right: 0px;
  top: 0px; */

  /* grey */

  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  background-image: url(${SearchIcon});
  background-size: auto;
  background-repeat: no-repeat;
  background-position: 16px;
  /* padding: 8px 32px 8px 8px;
  border-radius: 8px;
  font: inherit; */
  //styleName: Text 1;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0em;
  text-align: left;
  padding-left: 48px;
  color: black;

  ::placeholder {
    /* padding-left: 16px; */
  }

  :hover,
  :focus {
    outline: 0;
    outline-offset: 0;
    border-color: rgba(110, 121, 140, 1);
  }

  @media screen and (min-width: ${mobile}) {
    /* width: 312px; */
    height: 56px;
    /* margin-bottom: 16px; */
  }

  @media screen and (min-width: ${tablet}) {
    /* width: 700px; */
    height: 66px;
    /* margin-bottom: 35px; */
  }

  @media screen and (min-width: ${desktop}) {
    /* width: 1020px; */

    height: 66px;
    /* margin-bottom: 51px; */
  }
`;
