import { ReactElement } from 'react';
import { Dropdown, Form } from 'react-bootstrap';
import { HiDotsVertical } from 'react-icons/hi';
import { BiTrashAlt } from 'react-icons/bi';
import { BsPencil } from 'react-icons/bs';
import { CardLayout } from './styled';
import { IHero } from '../../../../interfaces/hero/hero.interface';
import { CustomImage } from '../../../../components/CustomImage';

type Props = {
  hero: IHero;
  className?: string;
  onClick: () => void;
  handleEdit: (id: string) => void;
  handleRemove: (id: string) => void;
  handleSwitch: (id: string) => void;
};

/**
 * Componente que exibe as informações de um herói em um card com opções de ação.
 * Ele exibe o avatar do herói, o nome (apelido) e oferece opções de edição, exclusão e ativação/desativação do herói.
 * O modal de edição e as ações de exclusão e ativação/desativação são manipulados por funções passadas como props.
 *
 * @param {Props} props - As propriedades que o componente recebe.
 * @param {IHero} props.hero - O herói cujas informações serão exibidas no card.
 * @param {string} props.className - Classe CSS opcional para o card.
 * @param {function} props.onClick - Função que será chamada quando o card for clicado.
 * @param {function} props.handleEdit - Função para editar o herói.
 * @param {function} props.handleRemove - Função para excluir o herói.
 * @param {function} props.handleSwitch - Função para ativar/desativar o herói.
 *
 * @returns {ReactElement} - O card com informações do herói e suas opções de ação.
 */
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
          {props.hero.is_active && (
            <>
              <Dropdown.Item
                as="button"
                className="text-danger btn"
                title="Excluir"
                onClick={() => props.handleRemove(props.hero.id)}
              >
                <BiTrashAlt />
              </Dropdown.Item>

              <Dropdown.Item
                as="button"
                className="text-primary btn"
                title="Editar"
                onClick={() => props.handleEdit(props.hero.id)}
              >
                <BsPencil />
              </Dropdown.Item>
            </>
          )}
          <Form.Check
            id="custom-switch"
            type="switch"
            className="mt-2"
            title="Ativar/Desativar"
            onChange={() => props.handleSwitch(props.hero.id)}
            checked={props.hero.is_active}
          />
        </Dropdown.Menu>
      </Dropdown>
    </CardLayout>
  );
};
