// Components
import { LoadingWrapper, SvgWrapper } from './styled';
import { Logo } from '.';
import { fadein } from './styled/animations';

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
