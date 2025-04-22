import { useAppSelector } from '../../../store/hooks';

/**
 * Hook para verificar o estado de carregamento de diferentes partes da aplicação.
 * Neste caso, verifica o estado de carregamento do `hero` a partir do Redux store.
 *
 * O hook retorna um objeto com a propriedade `loading`, que é um valor booleano.
 * Se qualquer parte da aplicação estiver em carregamento (neste caso, a parte relacionada ao `hero`),
 * o valor de `loading` será `true`.
 *
 * @return {Object} - Retorna um objeto com a propriedade `loading`, que indica se algum processo está em andamento.
 */
export const useLoader = (): { loading: boolean } => {
  const heroLoading = useAppSelector(state => state.hero?.loading ?? false);

  const isLoading: boolean[] = [heroLoading];

  return { loading: isLoading.some(load => load === true) };
};
