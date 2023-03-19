import { MagnifyingGlass } from 'react-loader-spinner';

export const Loader = () => {
  return (
    (<p>Loading...</p>),
    (
      <MagnifyingGlass
        visible={true}
        height="180"
        width="180"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{
          position: 'fixed',
          top: '75%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="rgba(110, 121, 140, 1)"
      />
    )
  );
};
