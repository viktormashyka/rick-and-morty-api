import { List } from './Gallery.styled';

export const Gallery = ({ visibleCharacters }) => {
  return (
    <>
      <List>
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
      </List>
    </>
  );
};
