import { ReactElement } from 'react';
import { Dropdown, Form, Image } from 'react-bootstrap';
import { CardLayout } from './styled';
import { HiDotsVertical } from 'react-icons/hi';
import { BiTrashAlt } from 'react-icons/bi';
import { BsPencil } from 'react-icons/bs';
import { IHero } from '../../../../interfaces/hero/hero.interface';

type Props = {
  hero: IHero;
  onClick: () => void;
};

export const HeroCard = ({ hero, onClick }: Props): ReactElement => {
  return (
    <CardLayout>
      <div className="card-content" onClick={onClick}>
        <Image src={hero.avatar_url} alt={hero.nickname} />
        <p>{hero.nickname}</p>
      </div>
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
