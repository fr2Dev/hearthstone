import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DefaultState } from '../types';

import { loadInfos } from '../logic/actions';
export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const dispatch = useDispatch();
  const infos = useSelector((state: DefaultState) => state.infos);
  const { isLoading } = infos;

  useEffect(() => {
    dispatch(loadInfos());
  }, [dispatch]);
  return (
    <div>
      <h1>home</h1>
      <p>{isLoading ? 'LOADING' : 'FETCHED'}</p>
    </div>
  );
};

export default Home;
