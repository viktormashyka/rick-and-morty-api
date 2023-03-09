import { useParams, useLocation } from 'react-router-dom';
// import { Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import { Suspense } from 'react';
import { BackLink } from 'components/BackLink';
import { fetchCharacterById } from 'api';

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
  if (!character) return <p>loading...</p>;

  const { name, status, species, type, gender, origin, image } = character;

  return (
    <main style={{ marginLeft: '30px' }}>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <img src={image} alt={name} />
      <div>
        <h1>{name}</h1>
        <h2>Information</h2>
        <h3>Gender</h3>
        <p>{gender}</p>
        <h3>Status</h3>
        <p>{status}</p>
        <h3>Specie</h3>
        <p>{species}</p>
        <h3>Origin</h3>
        <p>{origin.name}</p>
        <h3>Type</h3>
        <p>{type}</p>
      </div>
      {/* <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast" state={{ from: backLinkHref }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: backLinkHref }}>
              Reviews
            </Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </div> */}
    </main>
  );
};

export default CharacterDetails;
