import { ReactElement } from 'react';
import { Image } from 'react-bootstrap';
import { CardLayout } from './styled';
import { IHero } from '../../interfaces/hero/hero.interface';

type Props = {
  hero: IHero;
};

export const HeroCard = ({ hero }: Props): ReactElement => {
  return (
    <CardLayout>
      <Image src={hero.avatar_url} alt={hero.nickname} />
      <p>{hero.nickname}</p>
    </CardLayout>
  );
};
