import styled from 'styled-components';
import image_large from '../../images/PngItem_438051_1.png';
import image_small from '../../images/PngItem_438051_2.png';

export const Wrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (max-width: 767px) {
    width: 312px;
    height: 104px;
    background-image: url(${image_small});
  }

  @media screen and (min-width: 768px) {
    width: 600px;
    height: 200px;
    background-image: url(${image_large});
  }

  @media screen and (min-width: 1280px) {
    width: 600px;
    height: 200px;
    background-image: url(${image_large});
  }
`;
