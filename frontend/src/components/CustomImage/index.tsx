import { ReactElement, useState } from 'react';
import { Image } from 'react-bootstrap';

type Props = {
  src: string;
  alt: string;
  fallbackSrc: string;
};

/**
 * Componente de imagem customizada que exibe uma imagem com um fallback
 * caso ocorra um erro no carregamento da imagem original.
 *
 * @param {string} src - URL da imagem principal que será exibida.
 * @param {string} alt - Texto alternativo para a imagem, importante para acessibilidade.
 * @param {string} fallbackSrc - URL de uma imagem alternativa que será exibida caso ocorra um erro no carregamento da imagem original.
 *
 * @return {ReactElement} - Retorna um componente `<Image>` com a lógica de fallback para exibição da imagem.
 */
export const CustomImage = ({ src, alt, fallbackSrc }: Props): ReactElement => {
  const [imgSrc, setImgSrc] = useState<string>(src);

  return (
    <Image src={imgSrc} alt={alt} onError={() => setImgSrc(fallbackSrc)} />
  );
};
