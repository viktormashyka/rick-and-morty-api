import { useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { SearchBox } from '../components/SearchBox/SearchBox';
import { Loader } from 'components/Loader/Loader';
import { Hero } from 'components/Hero/Hero';

import { fetchCharacters, fetchCharacterByName } from '../api';

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
// import { ButtonGoogle } from 'components/ButtonGoogl/ButtonGoogl';

const Characters = ({ query }) => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
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
        throw new Error(error);
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
      try {
        setIsLoading(true);
        const characters = await fetchCharacterByName({
          query: characterName,
        });
        setCharacters(characters);
      } catch (error) {
        throw new Error(error);
      } finally {
        setIsLoading(false);
      }
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
      {isLoading && <Loader />}
      <main>
        {/* <ButtonGoogle /> */}
        <Hero />
        <SearchBox />
        <Gallery class="gallery">
          {visibleCharacters
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(character => (
              <GalleryItem key={character.id}>
                <LinkToDetails
                  to={`${character.id}`}
                  state={{ from: location }}
                >
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
      </main>
    </Container>
  );
};

export default Characters;
