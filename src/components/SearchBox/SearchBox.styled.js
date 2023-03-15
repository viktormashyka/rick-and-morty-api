import styled from 'styled-components';
// import { HiSearch } from 'react-icons/hi';

import SearchIcon from '../../images/SearchIcon.svg';

export const Wrapper = styled.div`
  /* display: inline-flex;
  align-items: center; */
  /* position: relative; */
  /* margin-top: 16px;
  text-transform: uppercase;
  width: 100%; */
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  position: relative;
  /* background-color: #fff; */
  /* border-radius: 3px; */
  /* overflow: hidden; */
`;

// export const SearchFormButton = styled.button`
//   display: inline-block;
//   justify-content: center;
//   align-items: center;
//   width: 24px;
//   height: 24px;
//   border: 5px solid black;
//   /* background-image: url('../../images/SearchIcon.svg'); */
//   /* background-size: 40%; */
//   background-repeat: no-repeat;
//   background-position: center;
//   opacity: 0.6;
//   transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   cursor: pointer;
//   outline: none;

//   transition: 400ms ease-out;
//   :hover {
//     transform: scale(1.05);
//     color: rgba(110, 121, 140, 1);
//   }
// `;

// .SearchForm-input {
//   display: inline-block;
//   width: 100%;
//   font: inherit;
//   font-size: 20px;
//   border: none;
//   outline: none;
//   padding-left: 4px;
//   padding-right: 4px;
// }

// .SearchForm-input::placeholder {
//   font: inherit;
//   font-size: 18px;
// }

export const Input = styled.input`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  /* padding: 16px; */
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

  @media screen and (min-width: 320px) {
    /* width: 312px; */
    height: 56px;
    /* margin-bottom: 16px; */
  }

  @media screen and (min-width: 768px) {
    /* width: 700px; */
    height: 66px;
    /* margin-bottom: 35px; */
  }

  @media screen and (min-width: 1280px) {
    /* width: 1020px; */

    height: 66px;
    /* margin-bottom: 51px; */
  }
`;

// export const Icon = styled(HiSearch)`
//   width: 24px;
//   height: 24px;
//   position: absolute;
//   left: 16px;
//   bottom: 16px;
// `;
