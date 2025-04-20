import { useAppSelector } from '../../../store/hooks';

export const useLoader = (): { loading: boolean } => {
  const heroLoading = useAppSelector(state => state.hero?.loading ?? false);

  const isLoading: boolean[] = [heroLoading];

  return { loading: isLoading.some(load => load === true) };
};
