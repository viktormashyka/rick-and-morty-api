import styled from 'styled-components';

import { mobile, tablet, desktop } from 'utils/vars';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;

  @media screen and (min-width: ${mobile}) {
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

export const Wrapper = styled.div`
  margin-top: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GalleryImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GalleryImg = styled.img`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  /* height: 240px; */
  /* width: 300px; */
  /* margin-bottom: 10px; */
  border-radius: 50%;
  @media screen and (max-width: ${tablet}) {
    width: 150px;
  }
  @media screen and (min-width: ${tablet}) {
    width: 300px;
  }
  @media screen and (min-width: ${desktop}) {
    width: 300px;
  }
  transition: 250ms, cubic-bezier(0.17, 0.67, 0.83, 0.67);
`;

export const CharacterH1 = styled.h1`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  /* font-size: 48px;
  line-height: 1.17; */
  display: flex;
  justify-content: center;
  align-items: center;
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

export const CharacterH2 = styled.h2`
  /* margin-top: 48px; */
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.15px;
  color: rgba(142, 142, 147, 1);

  @media screen and (max-width: ${tablet}) {
    justify-content: left;
    margin-top: 34px;
  }
  @media screen and (min-width: ${tablet}) {
    justify-content: center;
    margin-top: 16px;
  }
  @media screen and (min-width: ${desktop}) {
    justify-content: center;
    margin-top: 16px;
  }
`;
export const CharacterH3 = styled.h3`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.15px;
  color: rgba(8, 31, 50, 1); ;
`;

export const CharacterP = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;
  color: rgba(110, 121, 140, 0.5);
`;

export const CharacterDividerBox = styled.div`
  /* margin-top: 48px; */
  padding-left: 16px;

  @media screen and (max-width: ${tablet}) {
    margin-top: 16px;
  }
  @media screen and (min-width: ${tablet}) {
    margin-top: 48px;
  }
  @media screen and (min-width: ${desktop}) {
    margin-top: 48px;
  }
`;

export const CharacterDivider = styled.div`
  padding-top: 9px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(110, 121, 140, 0.3); ;
`;