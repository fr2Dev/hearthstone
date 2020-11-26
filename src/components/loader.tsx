// Components
import { LoadingWrapper, SvgWrapper } from './styled';
import { fadein } from './styled/animations';
import { Logo } from '.';

export interface LoaderProps {}

const Loader: React.FC<LoaderProps> = () => {
  return (
    <LoadingWrapper variants={fadein} initial="hidden" animate="show" exit="exit">
      <SvgWrapper>
        <Logo />
      </SvgWrapper>
    </LoadingWrapper>
  );
};

export default Loader;
