import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadInfos } from '../logic/actions';
// Types
import { DefaultState, Card } from '../types';
// Components
import { LastExtension, Loader } from './';
export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const dispatch = useDispatch();
  const infos = useSelector((state: DefaultState) => state.infos);
  const { base, cards, isLoading } = infos;
  const lastExtansion = Object.keys(cards)[Object.keys(cards).length - 1];

  useEffect(() => {
    dispatch(loadInfos());
  }, [dispatch]);
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {/* <ul>
            {base.standard.map((extension) => (
              <li key={extension}>{extension}</li>
            ))}
          </ul> */}

          <LastExtension />
        </>
      )}
    </div>
  );
};

export default Home;
