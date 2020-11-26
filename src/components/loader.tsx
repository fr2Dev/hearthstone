// Components
import { LoadingWrapper, SvgWrapper } from './styled';
import { Logo } from '.';

export interface LoaderProps {}

const Loader: React.FC<LoaderProps> = () => {
  return (
    <LoadingWrapper>
      <SvgWrapper>
        <Logo />
      </SvgWrapper>
    </LoadingWrapper>
  );
};

export default Loader;
