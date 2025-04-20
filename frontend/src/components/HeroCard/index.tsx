import { ReactElement } from 'react';
import { Dropdown, Form, Image } from 'react-bootstrap';
import { CardLayout } from './styled';
import { IHero } from '../../interfaces/hero/hero.interface';
import { HiDotsVertical } from 'react-icons/hi';
import { BiTrashAlt } from 'react-icons/bi';
import { BsPencil } from 'react-icons/bs';

type Props = {
  hero: IHero;
};

export const HeroCard = ({ hero }: Props): ReactElement => {
  return (
    <CardLayout>
      <Image src={hero.avatar_url} alt={hero.nickname} />
      <p>{hero.nickname}</p>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-actions">
          <HiDotsVertical />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item as="button" className="text-danger btn">
            <BiTrashAlt />
          </Dropdown.Item>
          <Dropdown.Item as="button" className="text-primary btn">
            <BsPencil />
          </Dropdown.Item>
          <Form.Check type="switch" className="mt-2" id="custom-switch" />
        </Dropdown.Menu>
      </Dropdown>
    </CardLayout>
  );
};
