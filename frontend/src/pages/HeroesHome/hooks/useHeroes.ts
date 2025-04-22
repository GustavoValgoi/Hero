import { useAppDispatch } from '../../../store/hooks';

export const useHeroes = () => {
  const dispatch = useAppDispatch();

  return { dispatch };
};
