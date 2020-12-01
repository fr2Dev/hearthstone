// Libraries
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
// Logic
import { loadInfos } from '../../logic/actions';
// Types
import { DefaultState } from '../../types';
// Components
import { CardsDisplay, Loader } from '..';
import { LogoWrapper } from '../styled';
import logoName from '../../assets/images/logo-name.png';

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [showLoadedContent, setshowLoadedContent] = useState(false);
  const dispatch = useDispatch();
  const infos = useSelector((state: DefaultState) => state.infos);
  const { isLoading } = infos;

  useEffect(() => {
    dispatch(loadInfos());
  }, [dispatch]);

  return (
    <div>
      <LogoWrapper>
        <img src={logoName} alt="hearthstone logo" />
      </LogoWrapper>
      <AnimatePresence onExitComplete={() => setshowLoadedContent(true)}>
        {isLoading && <Loader />}
      </AnimatePresence>
      {!isLoading && showLoadedContent && <CardsDisplay />}
    </div>
  );
};

export default Home;
