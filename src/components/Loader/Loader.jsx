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
        colors={['#980707', '#FF0404', '#FF7226', '#FF6347', '#FFFFFF']}
      />
    </LoaderContainer>
  );
};
