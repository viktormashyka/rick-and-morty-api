import { useParams, useLocation } from 'react-router-dom';
// import { Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import { Suspense } from 'react';
import { BackLink } from 'components/BackLink/BackLink';
import { Loader } from 'components/Loader/Loader';
import { fetchCharacterById } from 'api';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin: 0 auto;

  @media screen and (min-width: 320px) {
    width: 320px;
    padding: 23px 24px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 21px 24px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 21px 50px;
  }
`;

const Wrapper = styled.div`
  margin-top: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GalleryImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GalleryImg = styled.img`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  /* height: 240px; */
  /* width: 300px; */
  /* margin-bottom: 10px; */
  border-radius: 50%;
  @media screen and (max-width: 768px) {
    width: 150px;
  }
  @media screen and (min-width: 768px) {
    width: 300px;
  }
  @media screen and (min-width: 1280px) {
    width: 300px;
  }
  transition: 250ms, cubic-bezier(0.17, 0.67, 0.83, 0.67);
`;

const CharacterH1 = styled.h1`
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
  @media screen and (max-width: 768px) {
    margin-top: 34px;
    font-size: 32px;
    line-height: 1.19;
  }
  @media screen and (min-width: 768px) {
    margin-top: 16px;
    font-size: 48px;
    line-height: 1.17;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 16px;
    font-size: 48px;
    line-height: 1.17;
  }
`;

const CharacterH2 = styled.h2`
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

  @media screen and (max-width: 768px) {
    justify-content: left;
    margin-top: 34px;
  }
  @media screen and (min-width: 768px) {
    justify-content: center;
    margin-top: 16px;
  }
  @media screen and (min-width: 1280px) {
    justify-content: center;
    margin-top: 16px;
  }
`;
const CharacterH3 = styled.h3`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.15px;
  color: rgba(8, 31, 50, 1); ;
`;

const CharacterP = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;
  color: rgba(110, 121, 140, 0.5);
`;

const CharacterDividerBox = styled.div`
  /* margin-top: 48px; */
  padding-left: 16px;

  @media screen and (max-width: 768px) {
    margin-top: 16px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 48px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 48px;
  }
`;

const CharacterDivider = styled.div`
  padding-top: 9px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(110, 121, 140, 0.3); ;
`;

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
