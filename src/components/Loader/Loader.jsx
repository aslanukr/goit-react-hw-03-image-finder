import { ColorRing } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderContainer>
      <ColorRing
        visible={true}
        height="150"
        width="150"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#FEA949', '#B9410C', '#FF8700', '#FF4F00', '#C33C00']}
      />
    </LoaderContainer>
  );
};
