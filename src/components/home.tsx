import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { loadInfos } from '../logic/actions';
export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInfos());
  }, [dispatch]);
  return <h1>home</h1>;
};

export default Home;
