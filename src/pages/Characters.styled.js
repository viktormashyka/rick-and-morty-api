import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mobile, tablet, desktop } from 'utils/vars';

export const Gallery = styled.ul`
  list-style: none;

  /* @media screen and (min-width: 768px) { */
  /* display: flex;
    flex-wrap: wrap;
  } */

  @media screen and (max-width: ${tablet}) {
    margin-top: 32px;
  }

  @media screen and (min-width: ${tablet}) {
    margin-top: 51px;
    display: flex;
    flex-wrap: wrap;
    margin-right: -20px;
  }

  @media screen and (min-width: ${desktop}) {
    margin-top: 51px;
    display: flex;
    flex-wrap: wrap;
    margin-right: -20px;
  }
`;

export const GalleryItem = styled.li`
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.14),
    0px 3px 4px 0px rgba(0, 0, 0, 0.12), 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;

  /* margin-bottom: 32px; */
  display: block;
  /* width: 280px; */
  contain: content;

  @media screen and (max-width: ${tablet}) {
    margin-bottom: 32px;
    /* width: calc((100% - 60px) / 3);
    :not(:last-child) {
      margin-right: 20px; */
    /* } */
  }

  @media screen and (min-width: ${tablet}) {
    margin-bottom: 24px;
    /* width: calc((100% - 60px) / 3); */
    width: calc(100% / 3 - 20px);
    :not(:last-child) {
      margin-right: 20px;
    }
  }
  @media screen and (min-width: ${desktop}) {
    margin-bottom: 24px;
    /* width: calc((100% - 80px) / 4); */
    width: calc(100% / 4 - 20px);
    :not(:last-child) {
      margin-right: 20px;
    }
    /* width: 240px;
    height: 244px; */
  }

  transition: 250ms ease-out;
  &:focus,
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    box-shadow: 0px 10px 25px 3px rgba(110, 121, 140, 1);
  }
  &:focus GalleryImg,
  &:hover GalleryImg {
    @media screen and (min-width: ${mobile}) {
      transform: scale(1.05);
      /* border-radius: 0 0 20px 20px; */
    }
    @media screen and (min-width: ${tablet}) {
      transform: scale(1.08);
      /* border-radius: 0 0 40px 40px; */
    }
    @media screen and (min-width: ${desktop}) {
      transform: scale(1.1);
      /* border-radius: 0 0 65px 65px; */
    }
  }
`;

export const GalleryImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-image: url({character.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center; */

  @media screen and (max-width: ${tablet}) {
    width: 312px;
    height: 232px;
    overflow: hidden;
  }

  @media screen and (min-width: ${tablet}) {
    width: 240px;
    height: 168px;
    overflow: hidden;
  }

  @media screen and (min-width: ${desktop}) {
    width: 240px;
    height: 168px;
    overflow: hidden;
  }
`;

export const GalleryImg = styled.img`
  margin-bottom: 10px;
  /* margin-left: -40px; */
  border-radius: 0 0 5px 5px;
  display: block;
  /* margin: 0 auto; */
  width: 100%;
  height: auto;
  object-fit: cover;
  @media screen and (min-width: ${tablet}) {
    /* height: 445px; */
  }
  @media screen and (min-width: ${desktop}) {
    /* height: 240px; */
  }
  transition: 250ms, cubic-bezier(0.17, 0.67, 0.83, 0.67);
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;

  @media screen and (min-width: ${mobile}) {
    width: 320px;
    padding: 92px 24px;
  }

  @media screen and (min-width: ${tablet}) {
    width: 768px;
    padding: 86px 24px;
  }

  /* @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 86px 210px;
  } */

  @media screen and (min-width: ${desktop}) {
    width: 1440px;
    padding: 86px 210px;
  }
`;

export const CharacterText = styled.div`
  padding: 12px 16px;
`;

export const CharacterName = styled.h3`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.5;
  display: flex;
  align-items: center;
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.87);
  mix-blend-mode: normal;
`;

export const CharacterSpecies = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.25px;
  color: rgba(0, 0, 0, 0.6);
  mix-blend-mode: normal;
`;

export const LinkToDetails = styled(Link)`
  /* display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: black; */
  text-decoration: none;
  /* font-weight: 500;
  text-transform: uppercase;

  :hover {
    color: #381690;
  } */
`;
