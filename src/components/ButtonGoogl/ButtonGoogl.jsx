import { Wrapper } from './ButtonGoogl.styled';
import { ReactComponent as GoogleSvg } from '../../images/google.svg';

export const ButtonGoogle = () => {
  return (
    <Wrapper href="https://rickandmortyapi.com/api/users/google">
      <GoogleSvg />
    </Wrapper>
  );
};
