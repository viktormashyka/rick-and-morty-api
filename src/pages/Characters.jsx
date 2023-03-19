import { useSearchParams } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { SearchBox } from '../components/SearchBox/SearchBox';
import { Loader } from 'components/Loader/Loader';
import { Hero } from 'components/Hero/Hero';
// import {Gallery}
import {
  fetchCharacters,
  fetchCharacterByName,
  // fetchCharactersPrevPage,
} from '../api';

// import styled from 'styled-components';

import {
  Container,
  Gallery,
  GalleryItem,
  GalleryImgWrapper,
  GalleryImg,
  CharacterText,
  CharacterName,
  CharacterSpecies,
  LinkToDetails,
} from '../pages/Characters.styled';

import '../index.css';
import { ButtonGoogle } from 'components/ButtonGoogl/ButtonGoogl';
import { ButtonPrev } from 'components/ButtonPrev/ButtonPrev';

const Characters = ({ query }) => {
  const [characters, setCharacters] = useState([]);
  // const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(2);
  const [pages, setPages] = useState(0);
  const characterName = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    const controller = new AbortController();
    const getCharacters = async () => {
      try {
        setIsLoading(true);
        const characters = await fetchCharacters(controller.signal, { page });
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

  // useEffect(() => {
  //   // if (!characterName) return;
  //   const getCharacters = async () => {
  //     const characters = await fetchCharactersPrevPage();
  //     setCharacters(characters);
  //   };
  //   getCharacters();
  // }, []);

  useEffect(() => {
    if (!characterName) return;
    const getCharacters = async () => {
      try {
        setIsLoading(true);
        const characters = await fetchCharacterByName({
          query: characterName,
          page,
        });
        setCharacters(characters);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getCharacters();
  }, [characterName, page]);

  const getVisibleCharacters = () => {
    return characters.filter(character =>
      character.name.toLowerCase().includes(characterName.toLowerCase())
    );
  };

  const visibleCharacters = getVisibleCharacters();

  return (
    <Container>
      {isLoading && <Loader />}
      <main>
        <ButtonGoogle />
        <Hero />
        <SearchBox />
        {/* {isLoading && <Loader />} */}
        <Gallery class="gallery">
          {visibleCharacters.map(character => (
            <GalleryItem key={character.id}>
              <LinkToDetails to={`${character.id}`} state={{ from: location }}>
                <GalleryImgWrapper>
                  <GalleryImg src={character.image} alt={character.name} />
                </GalleryImgWrapper>
                <CharacterText>
                  <CharacterName>{character.name}</CharacterName>
                  <CharacterSpecies>{character.species}</CharacterSpecies>
                </CharacterText>
              </LinkToDetails>
            </GalleryItem>
          ))}
        </Gallery>
        <div>
          <ButtonPrev />
        </div>
      </main>
    </Container>
  );
};

export default Characters;
