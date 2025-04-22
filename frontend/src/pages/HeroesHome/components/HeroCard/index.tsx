import { ReactElement } from 'react';
import { Dropdown, Form } from 'react-bootstrap';
import { CardLayout } from './styled';
import { HiDotsVertical } from 'react-icons/hi';
import { BiTrashAlt } from 'react-icons/bi';
import { BsPencil } from 'react-icons/bs';
import { IHero } from '../../../../interfaces/hero/hero.interface';
import { CustomImage } from '../../../../components/CustomImage';

type Props = {
  hero: IHero;
  className?: string;
  onClick: () => void;
  handleEdit: (id: string) => void;
  handleRemove: (id: string) => void;
};

export const HeroCard = (props: Props): ReactElement => {
  return (
    <CardLayout className={props.className}>
      <div className="card-content" onClick={props.onClick}>
        <CustomImage
          src={props.hero.avatar_url}
          alt={props.hero.nickname}
          fallbackSrc="/no-image.jpg"
        />
        <p>{props.hero.nickname}</p>
      </div>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-actions">
          <HiDotsVertical />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item
            as="button"
            className="text-danger btn"
            onClick={() => props.handleRemove(props.hero.id)}
          >
            <BiTrashAlt />
          </Dropdown.Item>
          <Dropdown.Item
            as="button"
            className="text-primary btn"
            onClick={() => props.handleEdit(props.hero.id)}
          >
            <BsPencil />
          </Dropdown.Item>
          <Form.Check type="switch" className="mt-2" id="custom-switch" />
        </Dropdown.Menu>
      </Dropdown>
    </CardLayout>
  );
};
