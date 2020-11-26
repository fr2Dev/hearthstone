import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { loadInfos } from '../logic/actions';
// Types
import { DefaultState } from '../types';
// Components
import { LastExtension, Loader } from './';
export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const dispatch = useDispatch();
  const [showLoadedContent, setshowLoadedContent] = useState(false);
  const infos = useSelector((state: DefaultState) => state.infos);
  const { isLoading } = infos;

  useEffect(() => {
    dispatch(loadInfos());
  }, [dispatch]);
  return (
    <div>
      <AnimatePresence onExitComplete={() => setshowLoadedContent(true)}>
        {isLoading && <Loader />}
      </AnimatePresence>
      {!isLoading && showLoadedContent && <LastExtension />}
    </div>
  );
};

export default Home;
