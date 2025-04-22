import { useState } from 'react';
import { Image } from 'react-bootstrap';

type Props = {
  src: string;
  alt: string;
  fallbackSrc: string;
};

export const CustomImage = ({ src, fallbackSrc, alt }: Props) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image src={imgSrc} alt={alt} onError={() => setImgSrc(fallbackSrc)} />
  );
};
