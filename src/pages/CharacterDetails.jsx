import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BackLink } from 'components/BackLink/BackLink';
import { Loader } from 'components/Loader/Loader';
import { fetchCharacterById } from 'api';

import {
  Container,
  Wrapper,
  GalleryImgWrapper,
  GalleryImg,
  CharacterH1,
  CharacterH2,
  CharacterH3,
  CharacterP,
  CharacterDividerBox,
  CharacterDivider,
} from '../pages/CharacterDetails.styled';

const CharacterDetails = () => {
  const [character, setCharacter] = useState(null);
  const { characterId } = useParams();

  useEffect(() => {
    const getCharacter = async () => {
      const character = await fetchCharacterById({ characterId });
      setCharacter(character);
    };
    getCharacter();
  }, [characterId]);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  if (!character)
    return (
      <>
        <Loader />
        {/* <p>loading...</p> */}
      </>
    );

  const { name, status, species, type, gender, origin, image } = character;

  return (
    <Container>
      <main>
        <BackLink to={backLinkHref}>Go back</BackLink>
        <Wrapper>
          <div>
            <GalleryImgWrapper>
              <GalleryImg src={image} alt={name} />
            </GalleryImgWrapper>
            <CharacterH1>
              {name === '' ? <p>unknown</p> : <p>{name}</p>}
            </CharacterH1>
            <CharacterH2>Information</CharacterH2>
            <CharacterDividerBox>
              <CharacterDivider>
                <CharacterH3>Gender</CharacterH3>
                <CharacterP>
                  {gender === '' ? <p>unknown</p> : <p>{gender}</p>}
                </CharacterP>
              </CharacterDivider>
              <CharacterDivider>
                <CharacterH3>Status</CharacterH3>
                <CharacterP>
                  {status === '' ? <p>unknown</p> : <p>{status}</p>}
                </CharacterP>
              </CharacterDivider>
              <CharacterDivider>
                <CharacterH3>Specie</CharacterH3>
                <CharacterP>
                  {species === '' ? <p>unknown</p> : <p>{species}</p>}
                </CharacterP>
              </CharacterDivider>
              <CharacterDivider>
                <CharacterH3>Origin</CharacterH3>
                <CharacterP>
                  {origin.name === '' ? <p>unknown</p> : <p>{origin.name}</p>}
                </CharacterP>
              </CharacterDivider>
              <CharacterDivider>
                <CharacterH3>Type</CharacterH3>
                <CharacterP>
                  {type === '' ? <p>unknown</p> : <p>{type}</p>}
                </CharacterP>
              </CharacterDivider>
            </CharacterDividerBox>
          </div>
        </Wrapper>
      </main>
    </Container>
  );
};

export default CharacterDetails;
