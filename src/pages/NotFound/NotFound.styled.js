import styled from 'styled-components';

import { tablet, desktop } from 'utils/vars';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;

  @media screen and (man-width: ${tablet}) {
    width: 320px;
    padding: 23px 24px;
  }

  @media screen and (min-width: ${tablet}) {
    width: 768px;
    padding: 21px 24px;
  }

  @media screen and (min-width: ${desktop}) {
    width: 1440px;
    padding: 21px 50px;
  }
`;

export const ErrorTitle = styled.h1`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  text-align: center;
  color: rgba(8, 31, 50, 1);
  @media screen and (max-width: ${tablet}) {
    margin-top: 34px;
    font-size: 32px;
    line-height: 1.19;
  }
  @media screen and (min-width: ${tablet}) {
    margin-top: 16px;
    font-size: 48px;
    line-height: 1.17;
  }
  @media screen and (min-width: ${desktop}) {
    margin-top: 16px;
    font-size: 48px;
    line-height: 1.17;
  }
`;
