import { useSearchParams } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { SearchBox } from '../components/SearchBox/SearchBox';
import { Loader } from 'components/Loader/Loader';
import { Hero } from 'components/Hero/Hero';
// import {Gallery}
import { fetchCharacters, fetchCharacterByName } from '../api';

import styled from 'styled-components';

import '../index.css';
import { ButtonGoogle } from 'components/ButtonGoogl/ButtonGoogl';

// import { ReactComponent as GoogleSvg } from 'images/google.svg';

// import image from '../images/PngItem_438051.png';

// $mobile: 320px;
// $tablet: 768px;
// $desktop: 1280px;

// const ButtonGoogl = styled.a`
//   @media screen and (min-width: 767.9px) {
//     margin-top: 16px;
//   }
//   justify-content: center;
//   margin-left: auto;
//   margin-right: auto;
//   margin-top: 20px;
//   margin-bottom: 32px;
//   display: inline-flex;
//   align-items: center;
//   cursor: pointer;
//   background-color: #f6f7fb;
//   border-radius: 26px;
//   border: 0;
//   padding: 10px 18px 10px 20px;
//   font-family: Roboto;
//   font-style: normal;
//   font-weight: 500;
//   font-size: 14px;
//   line-height: 16px;
//   text-align: center;
//   letter-spacing: 0.02em;
//   color: #000000;
//   width: 119px;
//   height: 40px;
//   transition: 250ms ease-out;
//   &:focus,
//   &:hover {
//     cursor: pointer;
//     transform: scale(1.05);
//     box-shadow: 0px 10px 25px 3px rgba(110, 121, 140, 1);
//   }
// `;

// const Hero = styled.div`
//   /* position: absolute; */
//   margin-top: 86px;
//   width: 600px;
//   height: 200px;
//   left: 434px;
//   top: 86px;
// background-image: url(${image});
//     max-width: 1600px;
//   margin: 0 auto;
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: center;

//   /* background-image: url(../images/overlay-hero.png), url(../images/img-hero.jpg),
//     url(../images/bg-hero.png);
//   max-width: 1600px;
//   margin: 0 auto;
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: center;
//   /* padding-top: 200px;
//   padding-bottom: 200px; */ */
// `;

const Gallery = styled.ul`
  list-style: none;

  /* @media screen and (min-width: 768px) { */
  /* display: flex;
    flex-wrap: wrap;
  } */

  @media screen and (max-width: 767px) {
    margin-top: 32px;
  }

  @media screen and (min-width: 768px) {
    margin-top: 51px;
    display: flex;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 51px;
    display: flex;
    flex-wrap: wrap;
  }
`;

const GalleryItem = styled.li`
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.14),
    0px 3px 4px 0px rgba(0, 0, 0, 0.12), 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;

  /* margin-bottom: 32px; */
  display: block;
  /* width: 280px; */
  contain: content;

  @media screen and (max-width: 767px) {
    margin-bottom: 32px;
    /* width: calc((100% - 60px) / 3);
    :not(:last-child) {
      margin-right: 20px; */
    /* } */
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
    /* width: calc((100% - 60px) / 3); */
    width: calc(100% / 3 - 20px);
    :not(:last-child) {
      margin-right: 20px;
    }
  }
  @media screen and (min-width: 1280px) {
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
    @media screen and (min-width: 320px) {
      transform: scale(1.05);
      /* border-radius: 0 0 20px 20px; */
    }
    @media screen and (min-width: 768px) {
      transform: scale(1.08);
      /* border-radius: 0 0 40px 40px; */
    }
    @media screen and (min-width: 1280px) {
      transform: scale(1.1);
      /* border-radius: 0 0 65px 65px; */
    }
  }
`;

const GalleryImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-image: url({character.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center; */

  @media screen and (max-width: 767px) {
    width: 312px;
    height: 232px;
    overflow: hidden;
  }

  @media screen and (min-width: 768px) {
    width: 240px;
    height: 168px;
    overflow: hidden;
  }

  @media screen and (min-width: 1280px) {
    width: 240px;
    height: 168px;
    overflow: hidden;
  }
`;

const GalleryImg = styled.img`
  margin-bottom: 10px;
  margin-left: -40px;
  border-radius: 0 0 5px 5px;
  display: block;
  /* margin: 0 auto; */
  width: 100%;
  height: auto;
  object-fit: cover;
  @media screen and (min-width: 768px) {
    /* height: 445px; */
  }
  @media screen and (min-width: 1280px) {
    /* height: 240px; */
  }
  transition: 250ms, cubic-bezier(0.17, 0.67, 0.83, 0.67);
`;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;

  @media screen and (min-width: 320px) {
    width: 320px;
    padding: 92px 24px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 86px 24px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 86px 210px;
  }
`;

const CharacterText = styled.div`
  padding: 12px 16px;
`;

const CharacterName = styled.h3`
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

const CharacterSpecies = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.25px;
  color: rgba(0, 0, 0, 0.6);
  mix-blend-mode: normal;
`;

const LinkToDetails = styled(Link)`
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

const Characters = ({ query }) => {
  const [characters, setCharacters] = useState([]);
  // const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const characterName = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    const controller = new AbortController();
    const getCharacters = async () => {
      try {
        setIsLoading(true);
        const characters = await fetchCharacters(controller.signal);
        setCharacters(characters);
      } catch (error) {
        console.log('Something went wrong:(');
      } finally {
        setIsLoading(false);
      }
    };
    getCharacters();

    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    if (!characterName) return;
    const getCharacters = async () => {
      const characters = await fetchCharacterByName({ query: characterName });
      setCharacters(characters);
    };
    getCharacters();
  }, [characterName]);

  const getVisibleCharacters = () => {
    return characters.filter(character =>
      character.name.toLowerCase().includes(characterName.toLowerCase())
    );
  };

  const visibleCharacters = getVisibleCharacters();

  return (
    <Container>
      <main>
        <ButtonGoogle />
        <Hero />
        <SearchBox />
        {isLoading && <Loader />}
        <Gallery class="gallery">
          {visibleCharacters.map(character => (
            <GalleryItem key={character.id}>
              <LinkToDetails to={`${character.id}`} state={{ from: location }}>
                <div
                  style={
                    {
                      // position: 'relative',
                      // overflow: 'hidden'
                    }
                  }
                >
                  <GalleryImgWrapper
                    style={
                      {
                        // backgroundImage: `url(${character.image})`,
                        // position: 'absolute',
                        // left: 0,
                        // bottom: 0,
                      }
                    }
                  >
                    <GalleryImg src={character.image} alt={character.name} />
                  </GalleryImgWrapper>
                </div>
                <CharacterText>
                  <CharacterName>{character.name}</CharacterName>
                  <CharacterSpecies>{character.species}</CharacterSpecies>
                </CharacterText>
              </LinkToDetails>
            </GalleryItem>
          ))}
        </Gallery>
        <div
          id="pagination"
          className="tui-pagination custom-tui-pagination"
        ></div>
      </main>
    </Container>
  );
};

export default Characters;
